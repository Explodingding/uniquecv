import React from 'react';
import { CVData } from '../../types';

interface InfographicCVProps {
  data: CVData;
}

export const InfographicCV: React.FC<InfographicCVProps> = ({ data }) => {
  const { personalInfo, skills, experience, education } = data;
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold mb-2 text-accent">{personalInfo.name}</h1>
        <p className="text-gray-600">{personalInfo.email} • {personalInfo.phone}</p>
        <p className="text-gray-600">{personalInfo.location}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-primary/10 rounded-lg p-4 flex flex-col items-center">
          <svg className="w-10 h-10 text-primary mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
          <h2 className="text-lg font-semibold mb-2 text-primary">Umiejętności</h2>
          <div className="w-full">
            {skills.map((skill, i) => (
              <div key={i} className="mb-2">
                <div className="flex justify-between">
                  <span>{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-accent/10 rounded-lg p-4 flex flex-col items-center">
          <svg className="w-10 h-10 text-accent mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          <h2 className="text-lg font-semibold mb-2 text-accent">Edukacja</h2>
          <ul className="w-full">
            {education.map((edu, i) => (
              <li key={i} className="mb-2">
                <div className="font-semibold">{edu.degree} <span className="text-gray-500">@ {edu.institution}</span></div>
                <div className="text-sm text-gray-500">{edu.field}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2 text-primary">Doświadczenie</h2>
        <ul className="w-full">
          {experience.map((exp, i) => (
            <li key={i} className="mb-4">
              <div className="font-semibold">{exp.position} <span className="text-gray-500">@ {exp.company}</span></div>
              <div className="text-sm text-gray-500">{exp.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 