import React, { useState } from 'react';
import { CVData, Template } from '../types';
import { motion } from 'framer-motion';

const initialCVData: CVData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  experience: [],
  skills: [],
  education: [],
  swot: {
    strengths: [],
    weaknesses: [],
    opportunities: [],
    threats: [],
  },
};

export const CVCreator: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>('timeline');
  const [cvData, setCVData] = useState<CVData>(initialCVData);

  const handleTemplateChange = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleCVDataUpdate = (updatedData: Partial<CVData>) => {
    setCVData(prev => ({ ...prev, ...updatedData }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Unique CV Creator</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium mb-4">Select Template</h2>
              <div className="space-y-2">
                {(['timeline', 'dashboard', 'infographic'] as Template[]).map((template) => (
                  <button
                    key={template}
                    onClick={() => handleTemplateChange(template)}
                    className={`w-full px-4 py-2 rounded-md ${
                      selectedTemplate === template
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {template.charAt(0).toUpperCase() + template.slice(1)} CV
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CV Preview */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-lg shadow p-6"
            >
              <h2 className="text-lg font-medium mb-4">CV Preview</h2>
              {/* Template components will be rendered here */}
              <div className="min-h-[500px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Select a template to preview your CV</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}; 