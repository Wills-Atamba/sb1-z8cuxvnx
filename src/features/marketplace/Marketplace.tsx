import React from 'react';
import Section from '../../components/ui/Section';
import FilterPanel from './components/FilterPanel';
import TreatmentGrid from './components/TreatmentGrid';
import { treatments } from './data/treatments';

const Marketplace = () => {
  return (
    <Section
      id="marketplace"
      title="Beauty & Wellness Marketplace"
      subtitle="Discover and book treatments across East Africa"
      className="bg-gray-50"
    >
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <FilterPanel />
        <TreatmentGrid treatments={treatments} />
      </div>
    </Section>
  );
};

export default Marketplace;