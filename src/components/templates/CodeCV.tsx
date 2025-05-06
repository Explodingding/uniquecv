import React from 'react'
import { CVData } from '../../types'

interface Props {
  data: CVData
}

const CodeCV: React.FC<Props> = ({ data }) => {
  // Group skills by category
  const groupedSkills = data.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="bg-gray-900 text-gray-100 font-mono p-6 rounded-lg shadow-lg">
      {/* Editor Header */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-sm text-gray-400">resume.tsx</span>
      </div>

      {/* File Tree */}
      <div className="flex">
        <div className="w-48 pr-4 border-r border-gray-700">
          <div className="text-sm text-gray-400 mb-2">EXPLORER</div>
          <div className="space-y-1">
            <div className="text-blue-400">📁 src</div>
            <div className="pl-4">
              <div className="text-blue-400">📁 components</div>
              <div className="pl-4">
                <div className="text-yellow-400">📄 personal.tsx</div>
                <div className="text-yellow-400">📄 experience.tsx</div>
                <div className="text-yellow-400">📄 skills.tsx</div>
                <div className="text-yellow-400">📄 education.tsx</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 pl-4">
          <div className="space-y-6">
            {/* Personal Info */}
            <div>
              <div className="text-gray-400 mb-2">// Personal Information</div>
              <pre className="text-green-400">
{`const personalInfo = {
  name: "${data.personalInfo.name}",
  title: "Professional Developer",
  location: "${data.personalInfo.location}",
  email: "${data.personalInfo.email}",
  phone: "${data.personalInfo.phone}"
};`}
              </pre>
            </div>

            {/* Experience */}
            <div>
              <div className="text-gray-400 mb-2">// Work Experience</div>
              <pre className="text-blue-400">
{`const experience = [
${data.experience.map(exp => `  {
    company: "${exp.company}",
    position: "${exp.position}",
    period: "${exp.startDate.toLocaleDateString()} - ${exp.endDate ? exp.endDate.toLocaleDateString() : 'Present'}",
    achievements: [
${exp.achievements.map(achievement => `      "${achievement}"`).join(',\n')}
    ]
  }`).join(',\n')}
];`}
              </pre>
            </div>

            {/* Skills */}
            <div>
              <div className="text-gray-400 mb-2">// Technical Skills</div>
              <pre className="text-purple-400">
{`const skills = {
${Object.entries(groupedSkills).map(([category, skills]) => `  ${category}: [
    ${skills.map(skill => `"${skill}"`).join(',\n    ')}
  ]`).join(',\n')}
};`}
              </pre>
            </div>

            {/* Education */}
            <div>
              <div className="text-gray-400 mb-2">// Education</div>
              <pre className="text-yellow-400">
{`const education = [
${data.education.map(edu => `  {
    institution: "${edu.institution}",
    degree: "${edu.degree}",
    field: "${edu.field}",
    period: "${edu.startDate.toLocaleDateString()} - ${edu.endDate ? edu.endDate.toLocaleDateString() : 'Present'}"
  }`).join(',\n')}
];`}
              </pre>
            </div>

            {/* Summary */}
            <div>
              <div className="text-gray-400 mb-2">// About Me</div>
              <pre className="text-orange-400">
{`const summary = "${data.personalInfo.summary}";`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeCV 