export interface CVData {
  personalInfo: PersonalInfo
  experience: ExperienceItem[]
  skills: Skill[]
  education: EducationItem[]
  swot: SWOTData
}

export interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: string
  summary: string
  photo?: string
}

export interface ExperienceItem {
  company: string
  position: string
  startDate: Date
  endDate: Date | null
  description: string
  achievements: string[]
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface EducationItem {
  institution: string
  degree: string
  field: string
  startDate: Date
  endDate: Date | null
  description: string
}

export interface SWOTData {
  strengths: string[]
  weaknesses: string[]
  opportunities: string[]
  threats: string[]
}

export type Template = 'timeline' | 'dashboard' | 'infographic' | 'swot' | 'comic' | 'terminal' | 'retro' | 'emoji' | 'ascii' | 'rpg' | 'social' | 'code' | 'periodic' | 'recipe' | 'metro' | 'board' 