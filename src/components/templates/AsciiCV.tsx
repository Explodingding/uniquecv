import React from 'react';
import { CVData } from '../../types';

export const AsciiCV: React.FC<{ data: CVData }> = ({ data }) => {
  const { personalInfo, experience, skills } = data;
  return (
    <pre style={{
      fontFamily: 'Fira Mono, Consolas, monospace',
      background: '#222',
      color: '#fff',
      border: '2px solid #fff',
      borderRadius: 8,
      padding: 24,
      maxWidth: 700,
      margin: '32px auto',
      fontSize: 15,
      lineHeight: 1.5,
    }}>{`
+--------------------------------------------------+
| ${personalInfo.name.padEnd(46)} |
| ${personalInfo.email.padEnd(46)} |
| ${personalInfo.phone.padEnd(46)} |
| ${personalInfo.location.padEnd(46)} |
+--------------------------------------------------+
| O mnie: ${personalInfo.summary}
+--------------------------------------------------+
| Doświadczenie:
${experience.map(exp => `| - ${exp.position} @ ${exp.company}
|   ${exp.description}
${exp.achievements.map(a => `|   * ${a}`).join('\n')}`).join('\n')}
+--------------------------------------------------+
| Umiejętności:
${skills.map(skill => `| - ${skill.name} (${skill.level}%)`).join('\n')}
+--------------------------------------------------+
`}</pre>
  );
}; 