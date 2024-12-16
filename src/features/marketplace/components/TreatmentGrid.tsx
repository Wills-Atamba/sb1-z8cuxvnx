import React from 'react';
import TreatmentCard from './TreatmentCard';
import { Treatment } from '../../../types';

interface TreatmentGridProps {
  treatments: Treatment[];
}

const TreatmentGrid = ({ treatments }: TreatmentGridProps) => {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {treatments.map((treatment) => (
        <TreatmentCard key={treatment.id} treatment={treatment} />
      ))}
    </div>
  );
};

export default TreatmentGrid;