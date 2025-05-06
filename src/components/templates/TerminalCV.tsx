import React from 'react';
import { CVData } from '../../types';

export const TerminalCV: React.FC<{ data: CVData }> = ({ data }) => {
  const { personalInfo, experience, skills } = data;
  return (
    <div style={{ background: '#181818', color: '#00ff00', fontFamily: 'Fira Mono, Consolas, monospace', borderRadius: 12, boxShadow: '0 0 24px #222' }} className="p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="text-lg">$ whoami</div>
        <div className="pl-4">{personalInfo.name}</div>
        <div className="text-lg mt-4">$ contact --email --phone --location</div>
        <div className="pl-4">{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</div>
        <div className="text-lg mt-4">$ summary</div>
        <div className="pl-4">{personalInfo.summary}</div>
      </div>
      <div className="mb-8">
        <div className="text-lg">$ experience</div>
        <div className="pl-4">
          {experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <span className="text-green-400">{exp.position}</span> @ <span className="text-green-300">{exp.company}</span>
              <div className="text-green-200">{exp.description}</div>
              {exp.achievements.length > 0 && (
                <ul className="list-disc list-inside ml-4">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="text-green-500">{ach}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-lg">$ skills</div>
        <div className="pl-4 flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="bg-green-900 text-green-200 px-2 py-1 rounded font-mono">{skill.name} ({skill.level}%)</span>
          ))}
        </div>
      </div>
    </div>
  );
}; 