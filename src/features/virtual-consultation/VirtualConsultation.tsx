import React from 'react';
import Section from '../../components/ui/Section';
import ConsultationCard from './components/ConsultationCard';
import { consultationOptions } from './data/consultationOptions';
import { useConsultation } from './hooks/useConsultation';

const VirtualConsultation = () => {
  const { handleConsultationSelect, handleAIAnalysis } = useConsultation();

  return (
    <Section
      id="virtual-consultation"
      title="Virtual Consultation"
      subtitle="Connect with our experts from anywhere in the world"
      className="bg-white"
    >
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consultationOptions.map((option) => (
          <ConsultationCard
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            buttonText={option.buttonText}
            onClick={() => 
              option.id === 'ai' 
                ? handleAIAnalysis()
                : handleConsultationSelect(option.id === 'video' ? 'video' : 'chat')
            }
          />
        ))}
      </div>
    </Section>
  );
};

export default VirtualConsultation;