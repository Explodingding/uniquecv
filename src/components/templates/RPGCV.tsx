import React from 'react'
import { CVData } from '../../types'

interface Props {
  data: CVData
}

const statIcons: Record<string, string> = {
  Frontend: '🗡️',
  Backend: '🛡️',
  Soft: '🎭',
  Other: '✨',
}

const RPGCV: React.FC<Props> = ({ data }) => {
  // Statystyki na podstawie kategorii umiejętności
  const stats = Array.from(
    data.skills.reduce((acc, skill) => {
      acc.set(skill.category, (acc.get(skill.category) || 0) + skill.level)
      return acc
    }, new Map<string, number>()),
    ([name, value]) => ({ name, value: Math.round(value / data.skills.filter(s => s.category === name).length) })
  )

  const level = Math.floor(data.experience.length / 2) + 1
  const mainClass = stats.length > 0 ? stats.reduce((a, b) => (a.value > b.value ? a : b)).name : 'Adventurer'

  return (
    <div className="bg-gradient-to-br from-amber-100 to-amber-300 p-6 rounded-2xl shadow-2xl border-4 border-amber-800 max-w-3xl mx-auto w-full font-serif">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-extrabold text-amber-900 drop-shadow">{data.personalInfo.name}</h1>
        <div className="flex justify-center gap-2 text-amber-700 mt-1">
          <span>Level {level}</span>
          <span>•</span>
          <span>Class: {mainClass}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stat Block */}
        <section className="bg-amber-50 border-2 border-amber-700 rounded-xl p-4 flex flex-col gap-3">
          <h2 className="text-lg font-bold text-amber-900 mb-2">Character Stats</h2>
          <ul className="flex flex-col gap-2">
            {stats.map((stat, i) => (
              <li key={i} className="flex items-center gap-2 min-w-0">
                <span className="text-2xl">{statIcons[stat.name] || statIcons.Other}</span>
                <span className="text-xs text-amber-700 font-bold truncate max-w-[90px] min-w-0">{stat.name}</span>
                <div className="flex-1 min-w-0 w-full h-3 bg-amber-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-600 rounded-full" style={{ width: `${(stat.value / 10) * 100}%` }} />
                </div>
                <span className="text-xs text-amber-700 w-6 text-right">{stat.value}</span>
              </li>
            ))}
          </ul>
        </section>
        {/* Quest Log */}
        <section className="bg-amber-50 border-2 border-amber-700 rounded-xl p-4 flex flex-col gap-3">
          <h2 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2"><span>📜</span>Quest Log</h2>
          <ul className="flex flex-col gap-3">
            {data.experience.map((exp, i) => (
              <li key={i} className="">
                <div className="font-bold text-amber-900">{exp.position}</div>
                <div className="text-amber-700 text-xs">{exp.company}</div>
                <div className="text-amber-600 text-xs">{exp.startDate.toLocaleDateString()} - {exp.endDate ? exp.endDate.toLocaleDateString() : 'Present'}</div>
                {exp.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-xs text-amber-700 mt-1">
                    {exp.achievements.map((ach, j) => <li key={j}>{ach}</li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
        {/* Skills */}
        <section className="bg-amber-50 border-2 border-amber-700 rounded-xl p-4 flex flex-col gap-3 md:col-span-2">
          <h2 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2"><span>⭐</span>Skills & Abilities</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {data.skills.map((skill, i) => (
              <li key={i} className="flex items-center gap-2 min-w-0">
                <span className="text-amber-800 font-semibold truncate max-w-[100px] min-w-0">{skill.name}</span>
                <div className="flex-1 min-w-0 w-full h-2 bg-amber-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-600 rounded-full" style={{ width: `${(skill.level / 10) * 100}%` }} />
                </div>
                <span className="text-xs text-amber-700 w-6 text-right">{skill.level}</span>
              </li>
            ))}
          </ul>
        </section>
        {/* Background & Contact */}
        <section className="bg-amber-50 border-2 border-amber-700 rounded-xl p-4 flex flex-col gap-2 md:col-span-2">
          <h2 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2"><span>🧙‍♂️</span>Background</h2>
          <p className="text-amber-800 mb-2 whitespace-pre-line text-sm">{data.personalInfo.summary}</p>
          <div className="mt-2">
            <h3 className="font-bold text-amber-900 text-sm mb-1">Contact</h3>
            <div className="text-amber-700 text-xs">{data.personalInfo.email}</div>
            <div className="text-amber-700 text-xs">{data.personalInfo.phone}</div>
            <div className="text-amber-700 text-xs">{data.personalInfo.location}</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RPGCV 