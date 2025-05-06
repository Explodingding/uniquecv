import React from 'react'
import { CVData } from '../../types'

interface Props {
  data: CVData
}

const CodeCV: React.FC<Props> = ({ data }) => {
  const totalExperience = data.experience.length
  const totalSkills = data.skills.length
  const totalEducation = data.education.length

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl border-4 border-gray-700 max-w-3xl mx-auto w-full font-mono">
      {/* Code Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-green-400 drop-shadow flex items-center justify-center gap-2">💻 {data.personalInfo.name}</h1>
        <p className="text-gray-400 text-lg">Professional Code</p>
      </div>

      {/* Code Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg text-center border-2 border-gray-700">
          <div className="text-2xl font-bold text-green-400">{totalExperience}</div>
          <div className="text-sm text-gray-400">Experience</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center border-2 border-gray-700">
          <div className="text-2xl font-bold text-green-400">{totalSkills}</div>
          <div className="text-sm text-gray-400">Skills</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center border-2 border-gray-700">
          <div className="text-2xl font-bold text-green-400">{totalEducation}</div>
          <div className="text-sm text-gray-400">Education</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center border-2 border-gray-700">
          <div className="text-2xl font-bold text-green-400">{data.experience.length}</div>
          <div className="text-sm text-gray-400">Positions</div>
        </div>
      </div>

      {/* Experience Functions */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">📝 Functions</h2>
        <div className="flex flex-col gap-4">
          {data.experience.map((exp, i) => (
            <div key={i} className="bg-gray-800 border-2 border-gray-700 rounded-lg p-4 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">{i + 1}</span>
                <span className="font-bold text-green-400 truncate max-w-[120px] min-w-0">{exp.position}</span>
                <span className="text-gray-400 text-sm">@ {exp.company}</span>
              </div>
              <div className="text-xs text-gray-500">{exp.startDate.toLocaleDateString()} - {exp.endDate ? exp.endDate.toLocaleDateString() : 'Present'}</div>
              {exp.achievements.length > 0 && (
                <ul className="list-disc list-inside text-xs text-gray-400 mt-1">
                  {exp.achievements.map((ach, j) => <li key={j}>{ach}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Collection */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">🎯 Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-2 min-w-0 bg-gray-800 border border-gray-700 rounded p-2">
              <span className="text-green-400 font-semibold truncate max-w-[100px] min-w-0">{skill.name}</span>
              <div className="flex-1 min-w-0 w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: `${(skill.level / 10) * 100}%` }} />
              </div>
              <span className="text-xs text-gray-400 w-6 text-right">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education Path */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">🎓 Education</h2>
        <div className="flex flex-col gap-4">
          {data.education.map((edu, i) => (
            <div key={i} className="bg-gray-800 border-2 border-gray-700 rounded-lg p-4 flex flex-col gap-1">
              <div className="font-bold text-green-400">{edu.degree}</div>
              <div className="text-gray-400 text-sm">@ {edu.school}</div>
              <div className="text-gray-500 text-xs">{edu.startDate.toLocaleDateString()} - {edu.endDate ? edu.endDate.toLocaleDateString() : 'Present'}</div>
              <div className="text-gray-400 text-xs">{edu.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Info */}
      <section className="bg-gray-800 border-2 border-gray-700 rounded-xl p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-green-400 mb-2 flex items-center gap-2">👤 Profile</h2>
        <p className="text-gray-400 mb-2 whitespace-pre-line text-sm">{data.personalInfo.summary}</p>
        <div className="mt-2">
          <div className="text-gray-400 text-xs">Email: {data.personalInfo.email}</div>
          <div className="text-gray-400 text-xs">Phone: {data.personalInfo.phone}</div>
          <div className="text-gray-400 text-xs">Location: {data.personalInfo.location}</div>
        </div>
      </section>
    </div>
  )
}

export default CodeCV
export const CodeCV_EXPORT_SIZE = { width: 1200, height: 1700 } 