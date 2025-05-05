import React from 'react';
import { CVData } from '../../types';

interface DashboardCVProps {
  data: CVData;
}

export const DashboardCV: React.FC<DashboardCVProps> = ({ data }) => {
  const { personalInfo, skills, experience } = data;
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
        <p className="text-gray-600">{personalInfo.email} • {personalInfo.phone}</p>
        <p className="text-gray-600">{personalInfo.location}</p>
        <p className="mt-4 text-gray-700">{personalInfo.summary}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-primary/10 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2 text-primary">Umiejętności</h2>
          <ul>
            {skills.map((skill, i) => (
              <li key={i} className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span className="text-primary font-bold">{skill.level}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-accent/10 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2 text-accent">Doświadczenie</h2>
          <ul>
            {experience.map((exp, i) => (
              <li key={i} className="mb-4">
                <div className="font-semibold">{exp.position} <span className="text-gray-500">@ {exp.company}</span></div>
                <div className="text-sm text-gray-500">{exp.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Osiągnięcia</h2>
        <ul className="list-disc list-inside">
          {experience.flatMap(exp => exp.achievements).map((ach, i) => (
            <li key={i} className="text-gray-700">{ach}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 