import React from 'react';
import { CVData } from '../../types';

export const EmojiCV: React.FC<{ data: CVData }> = ({ data }) => {
  const { personalInfo, experience, skills } = data;
  return (
    <div style={{ fontFamily: 'Segoe UI Emoji, Apple Color Emoji, sans-serif', background: '#fffbe7', borderRadius: 24, boxShadow: '0 0 24px #fbbf24', padding: 32, maxWidth: 700, margin: '32px auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ fontSize: 56 }}>😃</div>
        <div style={{ fontSize: 36, fontWeight: 700 }}>{personalInfo.name}</div>
        <div style={{ fontSize: 18, color: '#f59e42' }}>{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</div>
        <div style={{ background: '#fbbf24', color: '#fff', borderRadius: 12, padding: 12, margin: '16px 0', fontSize: 18 }}>💬 {personalInfo.summary}</div>
      </div>
      <div style={{ fontSize: 32, margin: '24px 0 12px', color: '#f59e42' }}>💼 Doświadczenie</div>
      {experience.map((exp, i) => (
        <div key={i} style={{ background: '#fff', border: '2px solid #fbbf24', borderRadius: 12, padding: 12, marginBottom: 12 }}>
          <div style={{ fontSize: 22 }}>🏢 {exp.position} <span style={{ color: '#f59e42' }}>@ {exp.company}</span></div>
          <div style={{ color: '#f59e42', fontSize: 16 }}>{exp.description}</div>
          {exp.achievements.length > 0 && (
            <ul style={{ marginLeft: 20, color: '#fbbf24', fontSize: 15 }}>
              {exp.achievements.map((ach, j) => (
                <li key={j}>🏆 {ach}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div style={{ fontSize: 32, margin: '24px 0 12px', color: '#f59e42' }}>🛠️ Umiejętności</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {skills.map((skill, i) => (
          <span key={i} style={{ background: '#fbbf24', color: '#fff', borderRadius: 8, padding: '4px 12px', fontSize: 18, marginBottom: 4 }}>✨ {skill.name} ({skill.level}%)</span>
        ))}
      </div>
    </div>
  );
}; 