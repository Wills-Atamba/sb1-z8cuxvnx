import React from 'react';
import Section from '../ui/Section';
import LocationCard from './LocationCard';

const locations = [
  {
    city: 'Kampala',
    country: 'Uganda',
    address: 'Avemar Arcade T10, Luwum Street',
    phones: ['+256772419469', '+256771377668'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573641853193!2d32.57340731475353!3d0.3149000997750287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd31c8c3c5e7%3A0x7c5b0dd6c9d12b9c!2sLuwum%20St%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1647887291247!5m2!1sen!2s'
  },
  {
    city: 'Nairobi',
    country: 'Kenya',
    address: '11 Karen',
    phones: ['+256772419469'],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7258990177567!2d36.70557731475419!3d-1.3191999990354944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b5c0e9e7e7f%3A0x9b7c6c7e7c7e7c7e!2sKaren%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1647887291247!5m2!1sen!2s'
  }
];

const Locations = () => {
  return (
    <Section
      id="locations"
      title="Our Locations"
      subtitle="Visit us at our state-of-the-art clinics in East Africa"
      className="bg-gray-50"
    >
      <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {locations.map((location) => (
          <LocationCard
            key={`${location.city}-${location.country}`}
            {...location}
          />
        ))}
      </div>
    </Section>
  );
};

export default Locations;