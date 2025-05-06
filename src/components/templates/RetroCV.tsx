import React from 'react';
import { CVData } from '../../types';

export const RetroCV: React.FC<{ data: CVData }> = ({ data }) => {
  const { personalInfo, experience, skills } = data;
  return (
    <div style={{
      fontFamily: 'VT323, monospace',
      background: 'linear-gradient(135deg, #222 0%, #0ff 100%)',
      color: '#0ff',
      border: '8px double #ff0',
      borderRadius: 16,
      boxShadow: '0 0 32px #0ff8',
      padding: 32,
      maxWidth: 700,
      margin: '32px auto',
      textShadow: '2px 2px 0 #000, 0 0 8px #0ff',
    }}>
      <div style={{ fontSize: 40, color: '#ff0', letterSpacing: 2, marginBottom: 16, textAlign: 'center', textShadow: '2px 2px 0 #000, 0 0 8px #ff0' }}>{personalInfo.name}</div>
      <div style={{ fontSize: 20, color: '#fff', marginBottom: 8, textAlign: 'center' }}>{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</div>
      <div style={{ background: '#111', color: '#0ff', border: '2px dashed #ff0', borderRadius: 8, padding: 12, margin: '16px 0', fontSize: 18 }}>{personalInfo.summary}</div>
      <div style={{ fontSize: 28, color: '#ff0', margin: '24px 0 12px', textShadow: '2px 2px 0 #000' }}>DOŚWIADCZENIE</div>
      {experience.map((exp, i) => (
        <div key={i} style={{ background: '#222', border: '2px solid #0ff', borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <div style={{ fontSize: 22, color: '#0ff' }}>{exp.position} <span style={{ color: '#ff0' }}>@ {exp.company}</span></div>
          <div style={{ color: '#fff', fontSize: 16 }}>{exp.description}</div>
          {exp.achievements.length > 0 && (
            <ul style={{ marginLeft: 20, color: '#ff0', fontSize: 15 }}>
              {exp.achievements.map((ach, j) => (
                <li key={j}>{ach}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div style={{ fontSize: 28, color: '#ff0', margin: '24px 0 12px', textShadow: '2px 2px 0 #000' }}>UMIEJĘTNOŚCI</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {skills.map((skill, i) => (
          <span key={i} style={{ background: '#0ff', color: '#222', border: '2px solid #ff0', borderRadius: 4, padding: '4px 12px', fontSize: 18, marginBottom: 4, textShadow: 'none' }}>{skill.name} ({skill.level}%)</span>
        ))}
      </div>
    </div>
  );
}; 