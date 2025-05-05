import React from 'react'
import { ExperienceItem } from '../../types'
import { format } from 'date-fns'

interface ExperienceFormProps {
  experiences: ExperienceItem[]
  onAdd: (experience: ExperienceItem) => void
  onUpdate: (index: number, experience: Partial<ExperienceItem>) => void
  onRemove: (index: number) => void
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({
  experiences,
  onAdd,
  onUpdate,
  onRemove,
}) => {
  const handleChange = (index: number, field: keyof ExperienceItem, value: any) => {
    onUpdate(index, { [field]: value })
  }

  const handleAdd = () => {
    onAdd({
      company: '',
      position: '',
      startDate: new Date(),
      endDate: null,
      description: '',
      achievements: [],
    })
  }

  const handleAddAchievement = (index: number) => {
    const experience = experiences[index]
    onUpdate(index, {
      achievements: [...experience.achievements, ''],
    })
  }

  const handleAchievementChange = (expIndex: number, achievementIndex: number, value: string) => {
    const experience = experiences[expIndex]
    const newAchievements = [...experience.achievements]
    newAchievements[achievementIndex] = value
    onUpdate(expIndex, { achievements: newAchievements })
  }

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Experience {index + 1}</h3>
            <button
              onClick={() => onRemove(index)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleChange(index, 'position', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  value={format(exp.startDate, 'yyyy-MM-dd')}
                  onChange={(e) => handleChange(index, 'startDate', new Date(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  value={exp.endDate ? format(exp.endDate, 'yyyy-MM-dd') : ''}
                  onChange={(e) => handleChange(index, 'endDate', e.target.value ? new Date(e.target.value) : null)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={exp.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Achievements</label>
                <button
                  onClick={() => handleAddAchievement(index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Add Achievement
                </button>
              </div>
              {exp.achievements.map((achievement, achievementIndex) => (
                <div key={achievementIndex} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={achievement}
                    onChange={(e) => handleAchievementChange(index, achievementIndex, e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => {
                      const newAchievements = exp.achievements.filter((_, i) => i !== achievementIndex)
                      onUpdate(index, { achievements: newAchievements })
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleAdd}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Experience
      </button>
    </div>
  )
} 