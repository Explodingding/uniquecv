import React from 'react'
import { CVData } from '../../types'

interface Props {
  data: CVData
}

const RecipeCV: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-gradient-to-br from-lime-50 to-amber-100 p-6 rounded-2xl shadow-2xl border-4 border-lime-600 max-w-3xl mx-auto w-full font-serif">
      {/* Recipe Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-lime-800 flex items-center justify-center gap-2">🍳 {data.personalInfo.name}</h1>
        <p className="text-lime-700 text-lg italic">Professional Recipe</p>
      </div>
      {/* Ingredients (Skills) */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-lime-800 mb-3 flex items-center gap-2">🥕 Ingredients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-2 min-w-0 bg-white border border-lime-300 rounded p-2">
              <span className="text-lime-800 font-semibold truncate max-w-[100px] min-w-0">{skill.name}</span>
              <div className="flex-1 min-w-0 w-full h-2 bg-lime-200 rounded-full overflow-hidden">
                <div className="h-full bg-lime-500 rounded-full" style={{ width: `${(skill.level / 10) * 100}%` }} />
              </div>
              <span className="text-xs text-lime-700 w-6 text-right">{skill.level}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Instructions (Experience) */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-lime-800 mb-3 flex items-center gap-2">📝 Instructions</h2>
        <div className="flex flex-col gap-4">
          {data.experience.map((exp, i) => (
            <div key={i} className="bg-white border-2 border-lime-400 rounded-lg p-4 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center text-white font-bold">{i + 1}</span>
                <span className="font-bold text-lime-900 truncate max-w-[120px] min-w-0">{exp.position}</span>
                <span className="text-lime-700 text-sm">@ {exp.company}</span>
              </div>
              <div className="text-xs text-lime-600">{exp.startDate.toLocaleDateString()} - {exp.endDate ? exp.endDate.toLocaleDateString() : 'Present'}</div>
              {exp.achievements.length > 0 && (
                <ul className="list-disc list-inside text-xs text-lime-700 mt-1">
                  {exp.achievements.map((ach, j) => <li key={j}>{ach}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Notes (Education) */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-lime-800 mb-3 flex items-center gap-2">📚 Notes</h2>
        <div className="flex flex-col gap-4">
          {data.education.map((edu, i) => (
            <div key={i} className="bg-white border-2 border-lime-400 rounded-lg p-4 flex flex-col gap-1">
              <div className="font-bold text-lime-900">{edu.degree}</div>
              <div className="text-lime-700 text-sm">@ {edu.institution}</div>
              <div className="text-lime-600 text-xs">{edu.startDate.toLocaleDateString()} - {edu.endDate ? edu.endDate.toLocaleDateString() : 'Present'}</div>
              <div className="text-lime-800 text-xs">{edu.field}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Chef's Notes (Summary) */}
      <section className="bg-white border-2 border-lime-400 rounded-xl p-4 flex flex-col gap-2 mb-8">
        <h2 className="text-lg font-bold text-lime-800 mb-2 flex items-center gap-2">👨‍🍳 Chef's Notes</h2>
        <p className="text-lime-800 mb-2 whitespace-pre-line text-sm">{data.personalInfo.summary}</p>
      </section>
      {/* Contact */}
      <section className="bg-lime-50 border-2 border-lime-400 rounded-xl p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-lime-800 mb-2 flex items-center gap-2">📞 Contact</h2>
        <div className="text-lime-700 text-xs">Email: {data.personalInfo.email}</div>
        <div className="text-lime-700 text-xs">Phone: {data.personalInfo.phone}</div>
        <div className="text-lime-700 text-xs">Location: {data.personalInfo.location}</div>
      </section>
    </div>
  )
}

export default RecipeCV 