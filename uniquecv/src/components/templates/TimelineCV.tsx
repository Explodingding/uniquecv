import React from 'react';
import { motion } from 'framer-motion';
import { CVData } from '../../types';
import { format } from 'date-fns';

interface TimelineCVProps {
  data: CVData;
}

export const TimelineCV: React.FC<TimelineCVProps> = ({ data }) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Personal Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
        <p className="text-gray-600">{personalInfo.email} • {personalInfo.phone}</p>
        <p className="text-gray-600">{personalInfo.location}</p>
        <p className="mt-4 text-gray-700">{personalInfo.summary}</p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-blue-500"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
              <h3 className="text-xl font-medium">{exp.position}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">
                {format(exp.startDate, 'MMM yyyy')} - {exp.endDate ? format(exp.endDate, 'MMM yyyy') : 'Present'}
              </p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
              {exp.achievements.length > 0 && (
                <ul className="mt-2 list-disc list-inside">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600">{achievement}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-green-500"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full" />
              <h3 className="text-xl font-medium">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {format(edu.startDate, 'MMM yyyy')} - {edu.endDate ? format(edu.endDate, 'MMM yyyy') : 'Present'}
              </p>
              <p className="mt-2 text-gray-700">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.category}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 