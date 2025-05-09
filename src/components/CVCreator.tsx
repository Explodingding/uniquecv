import React, { useState, useRef } from 'react'
import { CVData, Template, PersonalInfo, ExperienceItem } from '../types'
import { motion } from 'framer-motion'
import { PersonalInfoForm } from './cv-sections/PersonalInfoForm'
import { ExperienceForm } from './cv-sections/ExperienceForm'
import { TimelineCV } from './templates/TimelineCV'
import { DashboardCV } from './templates/DashboardCV'
import { InfographicCV } from './templates/InfographicCV'
import { SWOTCV } from './templates/SWOTCV'
import { ComicCV } from './templates/ComicCV'
import { TerminalCV } from './templates/TerminalCV'
import { RetroCV } from './templates/RetroCV'
import { EmojiCV } from './templates/EmojiCV'
import { AsciiCV } from './templates/AsciiCV'
import RPGCV, { RPGCV_EXPORT_SIZE } from './templates/RPGCV'
import SocialCV from './templates/SocialCV'
import CodeCV from './templates/CodeCV'
import PeriodicCV from './templates/PeriodicCV'
import RecipeCV, { RecipeCV_EXPORT_SIZE } from './templates/RecipeCV'
import MetroCV from './templates/MetroCV'
import { generateExport } from '../utils/pdfGenerator'
import { SWOTAnalysis } from './cv-sections/SWOTAnalysis'
import ModernCV from './templates/ModernCV'
import ClassicCV from './templates/ClassicCV'
import MinimalCV from './templates/MinimalCV'
import BoardCV from './templates/BoardCV'
import { toPng } from 'html-to-image'
import { jsPDF } from 'jspdf'

const sampleCVData: CVData = {
  personalInfo: {
    name: 'Jan Kowalski',
    email: 'jan.kowalski@email.com',
    phone: '+48 123 456 789',
    location: 'Warszawa, Polska',
    summary: 'Doświadczony specjalista IT z pasją do nowoczesnych technologii i rozwoju oprogramowania.',
  },
  experience: [
    {
      company: 'Tech Solutions',
      position: 'Frontend Developer',
      startDate: new Date(2021, 2, 1),
      endDate: null,
      description: 'Tworzenie nowoczesnych aplikacji webowych w React.',
      achievements: ['Wdrożenie systemu CI/CD', 'Optymalizacja wydajności SPA'],
    },
    {
      company: 'Web Studio',
      position: 'Junior Developer',
      startDate: new Date(2019, 5, 1),
      endDate: new Date(2021, 1, 28),
      description: 'Utrzymanie i rozwój stron internetowych.',
      achievements: ['Automatyzacja testów', 'Wsparcie zespołu UX/UI'],
    },
  ],
  skills: [
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 70, category: 'Backend' },
  ],
  education: [
    {
      institution: 'Politechnika Warszawska',
      degree: 'Inżynier',
      field: 'Informatyka',
      startDate: new Date(2015, 9, 1),
      endDate: new Date(2019, 6, 30),
      description: 'Studia inżynierskie na kierunku Informatyka.',
    },
  ],
  swot: {
    strengths: ['Kreatywność', 'Umiejętność pracy zespołowej'],
    weaknesses: ['Niecierpliwość'],
    opportunities: ['Nowe technologie', 'Szkolenia'],
    threats: ['Zmiany na rynku pracy'],
  },
}

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
    title: 'Łatwe dodawanie sekcji',
    desc: 'Dodawaj i edytuj sekcje CV jednym kliknięciem.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
    title: 'Nowoczesne szablony',
    desc: 'Wybierz spośród kreatywnych, profesjonalnych szablonów.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    ),
    title: 'Eksport do PDF',
    desc: 'Pobierz swoje CV w formacie PDF jednym kliknięciem.'
  },
]

const templateDescriptions: Record<Template, string> = {
  timeline: 'Klasyczna oś czasu z sekcjami',
  dashboard: 'Nowoczesny dashboard z wykresami',
  infographic: 'Infografika z kolorowymi blokami',
  swot: 'Analiza SWOT w czterech sekcjach',
  comic: 'Komiksowy styl z dymkami',
  terminal: 'Terminal/CLI, zielony monospaced',
  retro: 'Pixel-art, retro komputerowy',
  emoji: 'Emoji, kolorowe bloki',
  ascii: 'ASCII-art, ramki tekstowe',
  rpg: 'Karta postaci z gry RPG',
  social: 'Profil społecznościowy',
  code: 'Interfejs edytora kodu',
  periodic: 'Układ okresowy pierwiastków',
  recipe: 'Karta przepisu kulinarnego',
  metro: 'Mapa metra',
  board: 'Plansza gry'
}

const templateIcons: Record<Template, string> = {
  timeline: '🕒',
  dashboard: '📊',
  infographic: '📈',
  swot: '🧩',
  comic: '💬',
  terminal: '🖥️',
  retro: '🎮',
  emoji: '😃',
  ascii: '🔤',
  rpg: '⚔️',
  social: '👤',
  code: '💻',
  periodic: '🧪',
  recipe: '📝',
  metro: '🚇',
  board: '🎲'
}

const exportSizes: Record<string, { width: number, height: number }> = {
  recipe: RecipeCV_EXPORT_SIZE,
  modern: { width: 1200, height: 1700 },
  classic: { width: 1200, height: 1700 },
  minimal: { width: 1200, height: 1700 },
  rpg: { width: 1200, height: 1700 },
  board: { width: 1200, height: 1700 },
  metro: { width: 1200, height: 1700 },
  social: { width: 1200, height: 1700 },
  code: { width: 1200, height: 1700 },
  periodic: { width: 1200, height: 1700 },
  comic: { width: 1200, height: 1700 },
  terminal: { width: 1200, height: 1700 },
  retro: { width: 1200, height: 1700 },
  emoji: { width: 1200, height: 1700 },
  ascii: { width: 1200, height: 1700 },
  infographic: { width: 1200, height: 1700 },
  dashboard: { width: 1200, height: 1700 },
  swot: { width: 1200, height: 1700 },
}

const templateList = [
  { id: 'modern', name: 'Modern', icon: '🎨' },
  { id: 'classic', name: 'Classic', icon: '📄' },
  { id: 'minimal', name: 'Minimal', icon: '⚪' },
  { id: 'rpg', name: 'RPG', icon: '⚔️' },
  { id: 'board', name: 'Board', icon: '🎲' },
  { id: 'recipe', name: 'Recipe', icon: '📝' },
  { id: 'metro', name: 'Metro', icon: '🚇' },
  { id: 'social', name: 'Social', icon: '📱' },
  { id: 'code', name: 'Code', icon: '💻' },
  { id: 'periodic', name: 'Periodic', icon: '🧪' },
  { id: 'comic', name: 'Comic', icon: '🦸' },
  { id: 'terminal', name: 'Terminal', icon: '⌨️' },
  { id: 'retro', name: 'Retro', icon: '🎮' },
  { id: 'emoji', name: 'Emoji', icon: '😊' },
  { id: 'ascii', name: 'ASCII', icon: '📟' },
  { id: 'infographic', name: 'Infographic', icon: '📊' },
  { id: 'dashboard', name: 'Dashboard', icon: '📈' },
  { id: 'swot', name: 'SWOT', icon: '🎯' },
]

const templateComponents: Record<string, React.FC<{ data: CVData }>> = {
  modern: ModernCV,
  classic: ClassicCV,
  minimal: MinimalCV,
  rpg: RPGCV,
  board: BoardCV,
  recipe: RecipeCV,
  metro: MetroCV,
  social: SocialCV,
  code: CodeCV,
  periodic: PeriodicCV,
  comic: ComicCV,
  terminal: TerminalCV,
  retro: RetroCV,
  emoji: EmojiCV,
  ascii: AsciiCV,
  infographic: InfographicCV,
  dashboard: DashboardCV,
  swot: SWOTCV,
}

const renderTemplate = (template: Template, data: CVData) => {
  switch (template) {
    case 'recipe':
      return <RecipeCV data={data} />
    default:
      return null
  }
}

export const CVCreator: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>('recipe')
  const [cvData, setCVData] = useState<CVData>(sampleCVData)
  const [activeTab, setActiveTab] = useState<'personal' | 'experience' | 'skills' | 'education' | 'swot'>('personal')
  const [exportFormat, setExportFormat] = useState<'jpg' | 'pdf'>('jpg')
  const [exportSize, setExportSize] = useState<'default' | 'a4' | 'square' | 'fit'>('default')
  const cvRef = useRef<HTMLDivElement>(null)

  const handlePersonalInfoChange = (data: Partial<PersonalInfo>) => {
    setCVData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, ...data } }))
  }

  const handleAddExperience = (exp: ExperienceItem) => {
    setCVData(prev => ({ ...prev, experience: [...prev.experience, exp] }))
  }

  const handleUpdateExperience = (idx: number, data: Partial<ExperienceItem>) => {
    setCVData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => i === idx ? { ...exp, ...data } : exp),
    }))
  }

  const handleRemoveExperience = (idx: number) => {
    setCVData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== idx),
    }))
  }

  const handleExport = () => {
    let width = 1200
    let height = 1700
    if (exportSize === 'default' && exportSizes[selectedTemplate]) {
      width = exportSizes[selectedTemplate].width
      height = exportSizes[selectedTemplate].height
    } else if (exportSize === 'a4') {
      width = 1240; height = 1754 // A4 150dpi
    } else if (exportSize === 'square') {
      width = 1400; height = 1400
    } else if (exportSize === 'fit') {
      const el = document.getElementById('cv-preview')
      if (el) {
        const rect = el.getBoundingClientRect()
        width = Math.round(rect.width)
        height = Math.round(rect.height)
      }
    }
    generateExport('cv-preview', exportFormat, width, height)
  }

  const handleExportJPG = async () => {
    if (!cvRef.current) return

    const element = cvRef.current
    const { width, height } = exportSizes[selectedTemplate]

    try {
      const dataUrl = await toPng(element, {
        width,
        height,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        },
      })

      const link = document.createElement('a')
      link.download = 'cv.png'
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error('Error exporting to JPG:', error)
    }
  }

  const handleExportPDF = async () => {
    if (!cvRef.current) return

    const element = cvRef.current
    const { width, height } = exportSizes[selectedTemplate]

    try {
      const dataUrl = await toPng(element, {
        width,
        height,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        },
      })

      const pdf = new jsPDF({
        orientation: height > width ? 'portrait' : 'landscape',
        unit: 'px',
        format: [width, height],
      })

      pdf.addImage(dataUrl, 'PNG', 0, 0, width, height)
      pdf.save('cv.pdf')
    } catch (error) {
      console.error('Error exporting to PDF:', error)
    }
  }

  const SelectedTemplate = templateComponents[selectedTemplate]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="hero-gradient py-16 px-4 text-white rounded-b-3xl shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Stwórz <span className="text-accent">unikalne CV</span> online</h1>
            <p className="text-lg md:text-xl mb-6 font-medium drop-shadow">Wyróżnij się na rynku pracy dzięki kreatywnym szablonom i prostemu edytorowi.</p>
            <a href="#cv-editor" className="inline-block px-8 py-3 rounded-full bg-white text-primary font-bold shadow-lg hover:bg-accent hover:text-white transition">Rozpocznij teraz</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 flex justify-center">
            <svg width="260" height="200" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="40" width="220" height="120" rx="24" fill="#fff"/>
              <rect x="40" y="60" width="180" height="20" rx="6" fill="#a5b4fc"/>
              <rect x="40" y="90" width="120" height="16" rx="5" fill="#e879f9"/>
              <rect x="40" y="115" width="80" height="12" rx="4" fill="#6366f1"/>
              <rect x="40" y="135" width="60" height="10" rx="3" fill="#c026d3"/>
              <circle cx="200" cy="130" r="16" fill="#e879f9"/>
              <rect x="180" y="120" width="40" height="8" rx="3" fill="#a5b4fc"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">Dlaczego Unique CV Creator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-primary">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MAIN EDITOR SECTION */}
      <main id="cv-editor" className="max-w-5xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 py-12 flex flex-col items-center">
        {/* Karuzela sticky nad podglądem CV */}
        <div className="flex items-center gap-4 mb-8 bg-gray-50 py-4 px-3 rounded shadow border border-gray-200" style={{ height: 100, minHeight: 100, maxHeight: 100 }}>
          <button onClick={() => handleScroll('left')} className="px-2 py-1 bg-gray-200 rounded-full text-2xl">◀</button>
          <div ref={cvRef} className="flex gap-4 overflow-x-auto no-scrollbar overflow-y-hidden" style={{ maxWidth: 1100, height: 90, minHeight: 90, maxHeight: 90 }}>
            {templateList.map((template) => (
              <div
                key={template.id}
                style={{ height: 86, minHeight: 86, maxHeight: 86 }}
                className={`min-w-[90px] p-2 rounded-lg border-2 cursor-pointer flex flex-col items-center justify-center transition-all duration-200 ${selectedTemplate === template.id ? 'border-primary scale-110 bg-primary/10 shadow-lg' : 'border-gray-200 bg-white hover:bg-primary/5'}`}
                onClick={() => setSelectedTemplate(template.id)}
                title={templateDescriptions[template.id] || ''}
              >
                <span className="text-3xl mb-2">{template.icon}</span>
                <div className="text-center font-bold text-[12px] leading-tight">{template.name} CV</div>
              </div>
            ))}
          </div>
          <button onClick={() => handleScroll('right')} className="px-2 py-1 bg-gray-200 rounded-full text-2xl">▶</button>
        </div>
        {/* Podgląd CV */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow p-8 mb-12 w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto"
        >
          <h2 className="text-lg font-medium mb-4">Podgląd CV</h2>
          <div className="flex flex-wrap gap-4 mb-4 items-center">
            <label className="font-semibold">Format:
              <select value={exportFormat} onChange={e => setExportFormat(e.target.value as any)} className="ml-2 border rounded px-2 py-1">
                <option value="jpg">JPG</option>
                <option value="pdf">PDF</option>
              </select>
            </label>
            <label className="font-semibold">Rozmiar:
              <select value={exportSize} onChange={e => setExportSize(e.target.value as any)} className="ml-2 border rounded px-2 py-1">
                <option value="default">Domyślny dla szablonu</option>
                <option value="a4">A4 (1240x1754)</option>
                <option value="square">Kwadrat (1400x1400)</option>
                <option value="fit">Dopasuj do zawartości</option>
              </select>
            </label>
          </div>
          <button
            onClick={handleExport}
            className="mb-4 px-6 py-2 rounded-md bg-primary text-white font-semibold shadow hover:bg-primary-dark transition"
          >
            Eksportuj do {exportFormat.toUpperCase()}
          </button>
          <div id="cv-preview" className="min-h-[200px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-6">
            <SelectedTemplate data={cvData} />
          </div>
        </motion.div>
        {/* Edytor sekcji */}
        <div className="w-full max-w-2xl xl:max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <button onClick={() => setActiveTab('personal')} className={`px-5 py-2 rounded-full font-semibold transition-all duration-150 shadow-sm ${activeTab === 'personal' ? 'bg-primary text-white scale-105 shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-primary/10'}`}>Dane osobowe</button>
            <button onClick={() => setActiveTab('experience')} className={`px-5 py-2 rounded-full font-semibold transition-all duration-150 shadow-sm ${activeTab === 'experience' ? 'bg-primary text-white scale-105 shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-primary/10'}`}>Doświadczenie</button>
            <button onClick={() => setActiveTab('skills')} className={`px-5 py-2 rounded-full font-semibold transition-all duration-150 shadow-sm ${activeTab === 'skills' ? 'bg-primary text-white scale-105 shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-primary/10'}`}>Umiejętności</button>
            <button onClick={() => setActiveTab('education')} className={`px-5 py-2 rounded-full font-semibold transition-all duration-150 shadow-sm ${activeTab === 'education' ? 'bg-primary text-white scale-105 shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-primary/10'}`}>Edukacja</button>
            <button onClick={() => setActiveTab('swot')} className={`px-5 py-2 rounded-full font-semibold transition-all duration-150 shadow-sm ${activeTab === 'swot' ? 'bg-primary text-white scale-105 shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-primary/10'}`}>SWOT</button>
          </div>
          <div className="mb-4">
            {activeTab === 'personal' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium mb-4">Dane osobowe</h2>
                <PersonalInfoForm data={cvData.personalInfo} onChange={handlePersonalInfoChange} />
              </div>
            )}
            {activeTab === 'experience' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium mb-4">Doświadczenie</h2>
                <ExperienceForm
                  experiences={cvData.experience}
                  onAdd={handleAddExperience}
                  onUpdate={handleUpdateExperience}
                  onRemove={handleRemoveExperience}
                />
              </div>
            )}
            {activeTab === 'skills' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium mb-4">Umiejętności</h2>
                {/* Skills section removed as per instructions */}
              </div>
            )}
            {activeTab === 'education' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium mb-4">Edukacja</h2>
                {/* Education section removed as per instructions */}
              </div>
            )}
            {activeTab === 'swot' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium mb-4">Analiza SWOT</h2>
                <SWOTAnalysis
                  data={cvData.swot}
                  onUpdate={swot => setCVData(prev => ({ ...prev, swot }))}
                />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 py-8 bg-white border-t text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Unique CV Creator. Stworzono z ♥ w React + Tailwind.
      </footer>
    </div>
  )
} 