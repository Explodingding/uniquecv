import { useState, useCallback } from 'react';
import { CVData, PersonalInfo, ExperienceItem, Skill, EducationItem, SWOTData } from '../types';

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

export const useCV = () => {
  const [cvData, setCVData] = useState<CVData>(initialCVData);

  const updatePersonalInfo = useCallback((personalInfo: Partial<PersonalInfo>) => {
    setCVData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...personalInfo },
    }));
  }, []);

  const addExperience = useCallback((experience: ExperienceItem) => {
    setCVData(prev => ({
      ...prev,
      experience: [...prev.experience, experience],
    }));
  }, []);

  const updateExperience = useCallback((index: number, experience: Partial<ExperienceItem>) => {
    setCVData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) =>
        i === index ? { ...exp, ...experience } : exp
      ),
    }));
  }, []);

  const removeExperience = useCallback((index: number) => {
    setCVData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  }, []);

  const addSkill = useCallback((skill: Skill) => {
    setCVData(prev => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  }, []);

  const updateSkill = useCallback((index: number, skill: Partial<Skill>) => {
    setCVData(prev => ({
      ...prev,
      skills: prev.skills.map((s, i) =>
        i === index ? { ...s, ...skill } : s
      ),
    }));
  }, []);

  const removeSkill = useCallback((index: number) => {
    setCVData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  }, []);

  const addEducation = useCallback((education: EducationItem) => {
    setCVData(prev => ({
      ...prev,
      education: [...prev.education, education],
    }));
  }, []);

  const updateEducation = useCallback((index: number, education: Partial<EducationItem>) => {
    setCVData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) =>
        i === index ? { ...edu, ...education } : edu
      ),
    }));
  }, []);

  const removeEducation = useCallback((index: number) => {
    setCVData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  }, []);

  const updateSWOT = useCallback((swot: Partial<SWOTData>) => {
    setCVData(prev => ({
      ...prev,
      swot: { ...prev.swot, ...swot },
    }));
  }, []);

  const resetCV = useCallback(() => {
    setCVData(initialCVData);
  }, []);

  return {
    cvData,
    updatePersonalInfo,
    addExperience,
    updateExperience,
    removeExperience,
    addSkill,
    updateSkill,
    removeSkill,
    addEducation,
    updateEducation,
    removeEducation,
    updateSWOT,
    resetCV,
  };
}; 