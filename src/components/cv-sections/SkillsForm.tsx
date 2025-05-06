import React from 'react';
import { Skill } from '../../types';

interface SkillsFormProps {
  skills: Skill[];
  onUpdate: (skills: Skill[]) => void;
}

export const SkillsForm: React.FC<SkillsFormProps> = ({ skills, onUpdate }) => {
  const handleChange = (index: number, field: keyof Skill, value: any) => {
    const updated = [...skills];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };
  const handleAdd = () => {
    onUpdate([...skills, { name: '', level: 50, category: '' }]);
  };
  const handleRemove = (index: number) => {
    onUpdate(skills.filter((_, i) => i !== index));
  };
  return (
    <div className="space-y-4">
      {skills.map((skill, i) => (
        <div key={i} className="flex gap-2 items-center">
          <input
            type="text"
            value={skill.name}
            onChange={e => handleChange(i, 'name', e.target.value)}
            placeholder="Nazwa umiejętności"
            className="border rounded px-2 py-1 w-1/3"
          />
          <input
            type="number"
            value={skill.level}
            min={0}
            max={100}
            onChange={e => handleChange(i, 'level', Number(e.target.value))}
            className="border rounded px-2 py-1 w-1/4"
          />
          <input
            type="text"
            value={skill.category}
            onChange={e => handleChange(i, 'category', e.target.value)}
            placeholder="Kategoria"
            className="border rounded px-2 py-1 w-1/3"
          />
          <button onClick={() => handleRemove(i)} className="text-red-600 hover:text-red-800 ml-2">Usuń</button>
        </div>
      ))}
      <button onClick={handleAdd} className="mt-2 px-4 py-1 bg-primary text-white rounded">Dodaj umiejętność</button>
    </div>
  );
}; 