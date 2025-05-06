export interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: string
  summary: string
}

export interface Experience {
  position: string
  company: string
  startDate: Date
  endDate: Date | null
  achievements: string[]
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface Education {
  degree: string
  school: string
  startDate: Date
  endDate: Date | null
  description: string
}

export interface CVData {
  personalInfo: PersonalInfo
  experience: Experience[]
  skills: Skill[]
  education: Education[]
}

export interface TemplateProps {
  data: CVData
}

export interface ExportSize {
  width: number
  height: number
} 