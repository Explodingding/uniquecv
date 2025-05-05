import React from 'react';
import { CVData } from '../../types';

interface SWOTCVProps {
  data: CVData;
}

export const SWOTCV: React.FC<SWOTCVProps> = ({ data }) => {
  const { personalInfo, swot } = data;
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold mb-2 text-primary">{personalInfo.name}</h1>
        <p className="text-gray-600">{personalInfo.email} • {personalInfo.phone}</p>
        <p className="text-gray-600">{personalInfo.location}</p>
        <p className="mt-4 text-gray-700">{personalInfo.summary}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-100 rounded-lg p-4">
          <h2 className="text-lg font-bold text-green-700 mb-2">Strengths</h2>
          <ul className="list-disc list-inside">
            {swot.strengths.map((item, i) => (
              <li key={i} className="text-green-900">{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-100 rounded-lg p-4">
          <h2 className="text-lg font-bold text-red-700 mb-2">Weaknesses</h2>
          <ul className="list-disc list-inside">
            {swot.weaknesses.map((item, i) => (
              <li key={i} className="text-red-900">{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-100 rounded-lg p-4">
          <h2 className="text-lg font-bold text-blue-700 mb-2">Opportunities</h2>
          <ul className="list-disc list-inside">
            {swot.opportunities.map((item, i) => (
              <li key={i} className="text-blue-900">{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-yellow-100 rounded-lg p-4">
          <h2 className="text-lg font-bold text-yellow-700 mb-2">Threats</h2>
          <ul className="list-disc list-inside">
            {swot.threats.map((item, i) => (
              <li key={i} className="text-yellow-900">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 