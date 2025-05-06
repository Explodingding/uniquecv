import React from 'react'
import { CVData } from '../../types'

interface Props {
  data: CVData
}

const ProfessionalCV: React.FC<Props> = ({ data }) => {
  const totalExperience = data.experience.length
  const totalSkills = data.skills.length
  const totalEducation = data.education.length

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl shadow-2xl border-4 border-blue-700 max-w-3xl mx-auto w-full font-sans">
      {/* Professional Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-blue-900 drop-shadow flex items-center justify-center gap-2">👔 {data.personalInfo.name}</h1>
        <p className="text-blue-700 text-lg">Professional Business</p>
      </div>

      {/* Professional Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg text-center border-2 border-blue-400">
          <div className="text-2xl font-bold text-blue-900">{totalExperience}</div>
          <div className="text-sm text-blue-700">Experience</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center border-2 border-blue-400">
          <div className="text-2xl font-bold text-blue-900">{totalSkills}</div>
          <div className="text-sm text-blue-700">Skills</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center border-2 border-blue-400">
          <div className="text-2xl font-bold text-blue-900">{totalEducation}</div>
          <div className="text-sm text-blue-700">Education</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center border-2 border-blue-400">
          <div className="text-2xl font-bold text-blue-900">{data.experience.length}</div>
          <div className="text-sm text-blue-700">Positions</div>
        </div>
      </div>

      {/* Experience Items */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">📝 Items</h2>
        <div className="flex flex-col gap-4">
          {data.experience.map((exp, i) => (
            <div key={i} className="bg-white border-2 border-blue-400 rounded-lg p-4 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">{i + 1}</span>
                <span className="font-bold text-blue-900 truncate max-w-[120px] min-w-0">{exp.position}</span>
                <span className="text-blue-700 text-sm">@ {exp.company}</span>
              </div>
              <div className="text-xs text-blue-600">{exp.startDate.toLocaleDateString()} - {exp.endDate ? exp.endDate.toLocaleDateString() : 'Present'}</div>
              {exp.achievements.length > 0 && (
                <ul className="list-disc list-inside text-xs text-blue-700 mt-1">
                  {exp.achievements.map((ach, j) => <li key={j}>{ach}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Collection */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">🎯 Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-2 min-w-0 bg-blue-50 border border-blue-300 rounded p-2">
              <span className="text-blue-800 font-semibold truncate max-w-[100px] min-w-0">{skill.name}</span>
              <div className="flex-1 min-w-0 w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(skill.level / 10) * 100}%` }} />
              </div>
              <span className="text-xs text-blue-700 w-6 text-right">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education Path */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">🎓 Education</h2>
        <div className="flex flex-col gap-4">
          {data.education.map((edu, i) => (
            <div key={i} className="bg-white border-2 border-blue-400 rounded-lg p-4 flex flex-col gap-1">
              <div className="font-bold text-blue-900">{edu.degree}</div>
              <div className="text-blue-700 text-sm">@ {edu.institution}</div>
              <div className="text-blue-600 text-xs">{edu.startDate.toLocaleDateString()} - {edu.endDate ? edu.endDate.toLocaleDateString() : 'Present'}</div>
              <div className="text-blue-800 text-xs">{edu.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Info */}
      <section className="bg-blue-50 border-2 border-blue-400 rounded-xl p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">👤 Profile</h2>
        <p className="text-blue-800 mb-2 whitespace-pre-line text-sm">{data.personalInfo.summary}</p>
        <div className="mt-2">
          <div className="text-blue-700 text-xs">Email: {data.personalInfo.email}</div>
          <div className="text-blue-700 text-xs">Phone: {data.personalInfo.phone}</div>
          <div className="text-blue-700 text-xs">Location: {data.personalInfo.location}</div>
        </div>
      </section>
    </div>
  )
}

export default ProfessionalCV
export const ProfessionalCV_EXPORT_SIZE = { width: 1200, height: 1700 } 