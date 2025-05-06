import React from 'react';
import { EducationItem } from '../../types';

interface EducationFormProps {
  education: EducationItem[];
  onUpdate: (education: EducationItem[]) => void;
}

export const EducationForm: React.FC<EducationFormProps> = ({ education, onUpdate }) => {
  const handleChange = (index: number, field: keyof EducationItem, value: any) => {
    const updated = [...education];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };
  const handleAdd = () => {
    onUpdate([
      ...education,
      { institution: '', degree: '', field: '', startDate: new Date(), endDate: null, description: '' },
    ]);
  };
  const handleRemove = (index: number) => {
    onUpdate(education.filter((_, i) => i !== index));
  };
  return (
    <div className="space-y-6">
      {education.map((edu, i) => (
        <div key={i} className="bg-gray-50 p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Edukacja {i + 1}</h3>
            <button onClick={() => handleRemove(i)} className="text-red-600 hover:text-red-800">Usuń</button>
          </div>
          <input
            type="text"
            value={edu.institution}
            onChange={e => handleChange(i, 'institution', e.target.value)}
            placeholder="Uczelnia"
            className="mb-2 w-full border rounded px-2 py-1"
          />
          <input
            type="text"
            value={edu.degree}
            onChange={e => handleChange(i, 'degree', e.target.value)}
            placeholder="Stopień"
            className="mb-2 w-full border rounded px-2 py-1"
          />
          <input
            type="text"
            value={edu.field}
            onChange={e => handleChange(i, 'field', e.target.value)}
            placeholder="Kierunek"
            className="mb-2 w-full border rounded px-2 py-1"
          />
          <div className="flex gap-2 mb-2">
            <input
              type="date"
              value={edu.startDate ? new Date(edu.startDate).toISOString().slice(0, 10) : ''}
              onChange={e => handleChange(i, 'startDate', new Date(e.target.value))}
              className="border rounded px-2 py-1 w-1/2"
            />
            <input
              type="date"
              value={edu.endDate ? new Date(edu.endDate).toISOString().slice(0, 10) : ''}
              onChange={e => handleChange(i, 'endDate', e.target.value ? new Date(e.target.value) : null)}
              className="border rounded px-2 py-1 w-1/2"
            />
          </div>
          <textarea
            value={edu.description}
            onChange={e => handleChange(i, 'description', e.target.value)}
            placeholder="Opis"
            className="w-full border rounded px-2 py-1"
            rows={2}
          />
        </div>
      ))}
      <button onClick={handleAdd} className="mt-2 px-4 py-1 bg-primary text-white rounded">Dodaj edukację</button>
    </div>
  );
}; 