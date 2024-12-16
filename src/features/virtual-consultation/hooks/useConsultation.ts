import { useState } from 'react';

type ConsultationType = 'video' | 'chat' | null;

export const useConsultation = () => {
  const [consultationType, setConsultationType] = useState<ConsultationType>(null);

  const handleConsultationSelect = (type: ConsultationType) => {
    setConsultationType(type);
    // Add additional logic here for handling consultation selection
  };

  const handleAIAnalysis = () => {
    window.location.href = '#skin-analysis';
  };

  return {
    consultationType,
    handleConsultationSelect,
    handleAIAnalysis
  };
};