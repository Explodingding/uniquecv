import React from 'react'
import { CVData } from '../../types'

interface Props {
  data: CVData
}

const SocialCV: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Profile Header */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        {data.personalInfo.photo && (
          <div className="absolute -bottom-16 left-8">
            <img
              src={data.personalInfo.photo}
              alt={data.personalInfo.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Profile Info */}
      <div className="pt-20 px-8 pb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{data.personalInfo.name}</h1>
            <p className="text-gray-600">{data.personalInfo.location}</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              Connect
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              Message
            </button>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{data.personalInfo.summary}</p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Experience</h2>
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h3 className="font-medium text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">
                    {exp.startDate.toLocaleDateString()} - {exp.endDate ? exp.endDate.toLocaleDateString() : 'Present'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-green-500 pl-4">
                  <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">
                    {edu.startDate.toLocaleDateString()} - {edu.endDate ? edu.endDate.toLocaleDateString() : 'Present'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Email:</span>
              <a href={`mailto:${data.personalInfo.email}`} className="text-blue-500 hover:underline">
                {data.personalInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Phone:</span>
              <a href={`tel:${data.personalInfo.phone}`} className="text-blue-500 hover:underline">
                {data.personalInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialCV 