import React from 'react';
import { CVData } from '../../types';

// Dodaj font Bangers przez Google Fonts w index.html lub <style> w head
// <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">

export const ComicCV: React.FC<{ data: CVData }> = ({ data }) => {
  const { personalInfo, experience, skills } = data;
  return (
    <div
      style={{
        fontFamily: 'Bangers, Comic Sans MS, Comic Sans, cursive',
        background: 'repeating-radial-gradient(circle at 10% 10%, #ffe 1px, #ffe 8px, #fffbe7 8px, #fffbe7 20px)',
        border: '8px solid #222',
        borderRadius: 32,
        boxShadow: '0 0 32px #f0c8',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="p-8 max-w-3xl mx-auto comic-bg"
    >
      {/* Efekt WOW na imieniu */}
      <div className="mb-8 text-center">
        <div
          style={{
            fontFamily: 'Bangers, Comic Sans MS, Comic Sans, cursive',
            fontSize: 48,
            color: '#fff',
            background: 'linear-gradient(90deg, #f43f5e 0%, #fbbf24 100%)',
            WebkitTextStroke: '2px #222',
            display: 'inline-block',
            padding: '0.2em 1em',
            borderRadius: 16,
            boxShadow: '0 4px 24px #fbbf24',
            marginBottom: 8,
            letterSpacing: 2,
            textShadow: '2px 2px 0 #222, 4px 4px 0 #fbbf24',
          }}
        >
          {personalInfo.name} <span style={{ fontSize: 32, color: '#fbbf24' }}>★</span>
        </div>
        <div className="mt-2 text-lg text-pink-700 comic-bubble" style={{ background: '#fff', display: 'inline-block', border: '3px solid #f43f5e', borderRadius: 16, padding: '0.2em 1em', marginTop: 12 }}>{personalInfo.email} • {personalInfo.phone}</div>
        <div className="text-pink-700 comic-bubble" style={{ background: '#fff', display: 'inline-block', border: '3px solid #f43f5e', borderRadius: 16, padding: '0.2em 1em', marginTop: 8 }}>{personalInfo.location}</div>
        <div className="mt-4 comic-bubble" style={{ background: '#fbbf24', border: '3px dashed #f43f5e', borderRadius: 24, padding: '0.5em 1.5em', display: 'inline-block', color: '#222', fontSize: 22, marginTop: 16 }}>{personalInfo.summary}</div>
      </div>
      <div className="mb-8">
        <h2 style={{ fontFamily: 'Bangers', fontSize: 36, color: '#f43f5e', textShadow: '2px 2px 0 #fff, 4px 4px 0 #fbbf24', marginBottom: 16 }}>💥 DOŚWIADCZENIE</h2>
        {experience.map((exp, i) => (
          <div key={i} className="mb-6 comic-bubble" style={{ background: '#fff', border: '3px solid #fbbf24', borderRadius: 24, padding: '1em', boxShadow: '4px 4px 0 #f43f5e' }}>
            <div style={{ fontFamily: 'Bangers', fontSize: 24, color: '#f43f5e', textShadow: '2px 2px 0 #fff' }}>{exp.position} <span style={{ color: '#fbbf24' }}>@ {exp.company}</span></div>
            <div style={{ color: '#222', fontSize: 18 }}>{exp.description}</div>
            {exp.achievements.length > 0 && (
              <ul className="list-disc list-inside mt-2">
                {exp.achievements.map((ach, j) => (
                  <li key={j} style={{ color: '#f43f5e', fontWeight: 'bold' }}>{ach}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div>
        <h2 style={{ fontFamily: 'Bangers', fontSize: 36, color: '#fbbf24', textShadow: '2px 2px 0 #fff, 4px 4px 0 #f43f5e', marginBottom: 16 }}>⭐ UMIEJĘTNOŚCI</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="comic-bubble" style={{ background: '#fff', border: '3px solid #f43f5e', borderRadius: 16, padding: '0.3em 1em', color: '#f43f5e', fontWeight: 'bold', fontSize: 20, boxShadow: '2px 2px 0 #fbbf24' }}>{skill.name} ({skill.level}%)</span>
          ))}
        </div>
      </div>
    </div>
  );
}; 