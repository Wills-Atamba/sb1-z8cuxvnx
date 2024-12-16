import React from 'react';
import { LucideIcon } from 'lucide-react';
import Button from '../../../components/ui/Button';

interface ConsultationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const ConsultationCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onClick
}: ConsultationCardProps) => {
  return (
    <div className="bg-purple-50 p-6 rounded-lg">
      <Icon className="h-8 w-8 text-purple-600" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <Button
        variant="primary"
        className="mt-4"
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ConsultationCard;