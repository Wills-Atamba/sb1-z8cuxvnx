import React from 'react';
import { Star } from 'lucide-react';
import { Treatment } from '../../../types';
import Button from '../../../components/ui/Button';

interface TreatmentCardProps {
  treatment: Treatment;
}

const TreatmentCard = ({ treatment }: TreatmentCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img 
        src={treatment.image}
        alt={treatment.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{treatment.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">4.8</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{treatment.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold">${treatment.price}</span>
          <Button variant="secondary">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;