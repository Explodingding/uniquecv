import React from 'react'
import { CVData } from '../../types'

interface Props {
  data: CVData
}

interface Element {
  symbol: string
  name: string
  number: number
  category: string
  level?: number
  description?: string
}

const PeriodicCV: React.FC<Props> = ({ data }) => {
  // Convert skills to "elements"
  const skillElements: Element[] = data.skills.map((skill, index) => ({
    symbol: skill.name.slice(0, 2).toUpperCase(),
    name: skill.name,
    number: index + 1,
    category: skill.category,
    level: skill.level
  }))

  // Convert experience to "elements"
  const experienceElements: Element[] = data.experience.map((exp, index) => ({
    symbol: exp.company.slice(0, 2).toUpperCase(),
    name: exp.position,
    number: index + 1,
    category: 'Experience',
    description: exp.description
  }))

  // Convert education to "elements"
  const educationElements: Element[] = data.education.map((edu, index) => ({
    symbol: edu.institution.slice(0, 2).toUpperCase(),
    name: edu.degree,
    number: index + 1,
    category: 'Education',
    description: edu.field
  }))

  const allElements = [...skillElements, ...experienceElements, ...educationElements]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Technical': 'bg-blue-500',
      'Soft': 'bg-green-500',
      'Experience': 'bg-yellow-500',
      'Education': 'bg-purple-500',
      'Other': 'bg-gray-500'
    }
    return colors[category] || colors['Other']
  }

  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo.name}</h1>
        <p className="text-gray-600">{data.personalInfo.summary}</p>
      </div>

      {/* Periodic Table Grid */}
      <div className="grid grid-cols-8 gap-2 max-w-4xl mx-auto">
        {allElements.map((element, index) => (
          <div
            key={index}
            className={`${getCategoryColor(element.category)} p-2 rounded-lg text-white shadow-md hover:scale-105 transition-transform`}
          >
            <div className="text-xs text-right">{element.number}</div>
            <div className="text-center font-bold text-lg">{element.symbol}</div>
            <div className="text-center text-xs truncate">{element.name}</div>
            {element.level !== undefined && (
              <div className="mt-1 h-1 bg-white bg-opacity-30 rounded-full">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ width: `${(element.level / 10) * 100}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Element Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Technical Skills</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Soft Skills</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span>Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <span>Education</span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-8 text-center text-gray-600">
        <p>{data.personalInfo.email}</p>
        <p>{data.personalInfo.phone}</p>
        <p>{data.personalInfo.location}</p>
      </div>
    </div>
  )
}

export default PeriodicCV 