import React from 'react';
import { SWOTData } from '../../types';

interface SWOTAnalysisProps {
  data: SWOTData;
  onUpdate: (swot: SWOTData) => void;
}

export const SWOTAnalysis: React.FC<SWOTAnalysisProps> = ({ data, onUpdate }) => {
  const handleChange = (field: keyof SWOTData, value: string, idx: number) => {
    const updated = { ...data, [field]: [...data[field]] };
    updated[field][idx] = value;
    onUpdate(updated);
  };
  const handleAdd = (field: keyof SWOTData) => {
    onUpdate({ ...data, [field]: [...data[field], ''] });
  };
  const handleRemove = (field: keyof SWOTData, idx: number) => {
    onUpdate({ ...data, [field]: data[field].filter((_, i) => i !== idx) });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {(['strengths', 'weaknesses', 'opportunities', 'threats'] as (keyof SWOTData)[]).map((field) => (
        <div key={field} className="bg-gray-50 rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2 capitalize">{field.charAt(0).toUpperCase() + field.slice(1)}</h3>
          {data[field].map((item, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                type="text"
                value={item}
                onChange={e => handleChange(field, e.target.value, i)}
                className="border rounded px-2 py-1 w-full"
              />
              <button onClick={() => handleRemove(field, i)} className="text-red-600 hover:text-red-800">Usuń</button>
            </div>
          ))}
          <button onClick={() => handleAdd(field)} className="mt-2 px-4 py-1 bg-primary text-white rounded">Dodaj</button>
        </div>
      ))}
    </div>
  );
}; 