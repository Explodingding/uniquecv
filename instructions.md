Plan stworzenia aplikacji do unikalnych CV w Cursor
Spis treści
Wstęp
Technologie
Struktura projektu
Komponenty
Szablony CV
Eksport do PDF
Instrukcja implementacji
Wstęp
Aplikacja ma na celu umożliwienie tworzenia nietypowych, kreatywnych CV z wykorzystaniem nowoczesnych technik wizualizacji danych i interaktywnych elementów. Główny nacisk kładziemy na unikalność prezentacji przy zachowaniu profesjonalizmu.

Technologie
Kopiuj
# Główne technologie
- React + TypeScript
- Tailwind CSS
- Framer Motion (animacje)
- react-to-pdf
- recharts (wykresy)
- shadcn/ui (komponenty UI)

# Dodatkowe biblioteki
- html2canvas
- jspdf
- react-beautiful-dnd (drag and drop)
- date-fns (manipulacja datami)
Struktura projektu
Kopiuj
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── cv-sections/
│   │   ├── PersonalInfo.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── SWOTAnalysis.tsx
│   ├── templates/
│   │   ├── TimelineCV.tsx
│   │   ├── DashboardCV.tsx
│   │   └── InfographicCV.tsx
│   └── shared/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Card.tsx
├── hooks/
│   ├── useCV.ts
│   └── usePDFExport.ts
├── styles/
│   └── globals.css
└── utils/
    ├── pdfGenerator.ts
    └── dataTransformers.ts
Komponenty
1. Edytor główny
Kopiuj
// src/components/Editor.tsx
interface EditorProps {
  template: string;
  data: CVData;
  onSave: (data: CVData) => void;
  onExport: () => void;
}
2. Wizualizacja umiejętności
Kopiuj
// src/components/cv-sections/Skills.tsx
interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
  onUpdate: (skills: Skill[]) => void;
}
3. Timeline doświadczenia
Kopiuj
// src/components/cv-sections/Experience.tsx
interface ExperienceItem {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  achievements: string[];
}
Szablony CV
1. Timeline CV
Kopiuj
// Główne cechy:
- Interaktywna oś czasu
- Animowane przejścia między punktami
- Responsywny układ
- Możliwość dodawania kamieni milowych
2. Dashboard CV
Kopiuj
// Elementy:
- Wykresy kołowe umiejętności
- Wskaźniki postępu
- Karty z kluczowymi osiągnięciami
- Interaktywne tooltips
3. SWOT CV
Kopiuj
interface SWOTData {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}
Eksport do PDF
Implementacja eksportu
Kopiuj
// src/utils/pdfGenerator.ts
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const generatePDF = async (elementId: string) => {
  const element = document.getElementById(elementId);
  const canvas = await html2canvas(element);
  const data = canvas.toDataURL('image/png');
  
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: 'a4'
  });
  
  const imgProps = pdf.getImageProperties(data);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
  pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('cv.pdf');
};
Instrukcja implementacji
1. Inicjalizacja projektu
Kopiuj
# Tworzenie projektu
npm create vite@latest unique-cv-creator -- --template react-ts

# Instalacja zależności
cd unique-cv-creator
npm install @shadcn/ui tailwindcss framer-motion recharts html2canvas jspdf date-fns react-beautiful-dnd
2. Konfiguracja Tailwind
Kopiuj
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Customowa paleta kolorów
      }
    }
  },
  plugins: []
}
3. Implementacja podstawowych komponentów
Kreator CV
Kopiuj
// src/components/CVCreator.tsx
import React, { useState } from 'react';
import { CVData, Template } from '../types';

export const CVCreator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>('timeline');
  const [cvData, setCVData] = useState<CVData>({
    personalInfo: {},
    experience: [],
    skills: [],
    education: [],
    swot: {
      strengths: [],
      weaknesses: [],
      opportunities: [],
      threats: []
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Implementacja interfejsu */}
    </div>
  );
};
4. Implementacja szablonów
Timeline CV
Kopiuj
// src/components/templates/TimelineCV.tsx
import { motion } from 'framer-motion';

export const TimelineCV = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8"
    >
      {/* Implementacja timeline */}
    </motion.div>
  );
};
5. Implementacja analizy SWOT
Kopiuj
// src/components/cv-sections/SWOTAnalysis.tsx
export const SWOTAnalysis = ({ data, onUpdate }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Implementacja macierzy SWOT */}
    </div>
  );
};
6. Wizualizacja umiejętności
Kopiuj
// src/components/cv-sections/SkillsChart.tsx
import { PieChart } from 'recharts';

export const SkillsChart = ({ skills }) => {
  return (
    <div className="w-full h-64">
      {/* Implementacja wykresów */}
    </div>
  );
};
7. Implementacja eksportu
Hook eksportu
Kopiuj
// src/hooks/usePDFExport.ts
import { useCallback } from 'react';
import { generatePDF } from '../utils/pdfGenerator';

export const usePDFExport = (elementId: string) => {
  const exportToPDF = useCallback(() => {
    generatePDF(elementId);
  }, [elementId]);

  return { exportToPDF };
};
Kolejne kroki rozwoju
System szablonów

Implementacja systemu zarządzania szablonami
Możliwość tworzenia własnych szablonów
Interaktywne elementy

Drag & drop sekcji
Edycja in-place
Animowane przejścia
Optymalizacja wydajności

Lazy loading komponentów
Optymalizacja renderowania
Cachowanie szablonów
Rozszerzenia

Export do różnych formatów
Integracja z LinkedIn
System portfolio online