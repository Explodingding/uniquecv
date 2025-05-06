import React from 'react'
import { CVData } from '../../types'

interface Props {
  data: CVData
}

const MetroCV: React.FC<Props> = ({ data }) => {
  // Define line colors
  const lineColors = {
    experience: 'bg-blue-500',
    education: 'bg-green-500',
    skills: 'bg-red-500',
    personal: 'bg-purple-500'
  }

  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{data.personalInfo.name}</h1>
        <p className="text-gray-600">{data.personalInfo.summary}</p>
      </div>

      {/* Metro Map */}
      <div className="relative max-w-4xl mx-auto overflow-x-auto">
        {/* Experience Line */}
        <div className="mb-12 max-w-full">
          <div className="flex items-center mb-4">
            <div className={`${lineColors.experience} w-8 h-2`}></div>
            <h2 className="ml-2 text-xl font-semibold">Experience Line</h2>
          </div>
          <div className="relative pl-8 max-w-full break-words">
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${lineColors.experience}`}></div>
            {data.experience.map((exp, index) => (
              <div key={index} className="relative mb-8 last:mb-0 max-w-full">
                <div className={`absolute -left-10 w-6 h-6 rounded-full ${lineColors.experience} flex items-center justify-center text-white font-bold`}>
                  {index + 1}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md max-w-full break-words overflow-x-auto">
                  <h3 className="text-lg font-medium text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">
                    {exp.startDate.toLocaleDateString()} - {exp.endDate ? exp.endDate.toLocaleDateString() : 'Present'}
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Line */}
        <div className="mb-12 max-w-full">
          <div className="flex items-center mb-4">
            <div className={`${lineColors.education} w-8 h-2`}></div>
            <h2 className="ml-2 text-xl font-semibold">Education Line</h2>
          </div>
          <div className="relative pl-8 max-w-full break-words">
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${lineColors.education}`}></div>
            {data.education.map((edu, index) => (
              <div key={index} className="relative mb-8 last:mb-0 max-w-full">
                <div className={`absolute -left-10 w-6 h-6 rounded-full ${lineColors.education} flex items-center justify-center text-white font-bold`}>
                  {index + 1}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md max-w-full break-words overflow-x-auto">
                  <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-700">{edu.field}</p>
                  <p className="text-sm text-gray-500">
                    {edu.startDate.toLocaleDateString()} - {edu.endDate ? edu.endDate.toLocaleDateString() : 'Present'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Line */}
        <div className="mb-12 max-w-full">
          <div className="flex items-center mb-4">
            <div className={`${lineColors.skills} w-8 h-2`}></div>
            <h2 className="ml-2 text-xl font-semibold">Skills Line</h2>
          </div>
          <div className="relative pl-8 max-w-full break-words">
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${lineColors.skills}`}></div>
            {data.skills.map((skill, index) => (
              <div key={index} className="relative mb-8 last:mb-0 max-w-full">
                <div className={`absolute -left-10 w-6 h-6 rounded-full ${lineColors.skills} flex items-center justify-center text-white font-bold`}>
                  {index + 1}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md max-w-full break-words overflow-x-auto">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
                    <span className="text-sm text-gray-500">{skill.category}</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${(skill.level / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Station */}
        <div className="relative pl-8 max-w-full">
          <div className={`absolute left-0 top-0 bottom-0 w-1 ${lineColors.personal}`}></div>
          <div className="relative max-w-full">
            <div className={`absolute -left-10 w-6 h-6 rounded-full ${lineColors.personal} flex items-center justify-center text-white font-bold`}>
              C
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md max-w-full break-words overflow-x-auto">
              <h3 className="text-lg font-medium text-gray-900">Contact Station</h3>
              <div className="mt-2 space-y-2">
                <p className="text-gray-600">{data.personalInfo.email}</p>
                <p className="text-gray-600">{data.personalInfo.phone}</p>
                <p className="text-gray-600">{data.personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Line Legend</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 ${lineColors.experience} rounded-full`}></div>
            <span>Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 ${lineColors.education} rounded-full`}></div>
            <span>Education</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 ${lineColors.skills} rounded-full`}></div>
            <span>Skills</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 ${lineColors.personal} rounded-full`}></div>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetroCV 