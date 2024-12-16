import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface LocationCardProps {
  city: string;
  country: string;
  address: string;
  phones: string[];
  mapUrl: string;
}

const LocationCard = ({ city, country, address, phones, mapUrl }: LocationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <iframe
        src={mapUrl}
        className="w-full h-64"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {city}, {country}
        </h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
            <p className="ml-3 text-gray-600">{address}</p>
          </div>
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
            <div className="ml-3 space-y-1">
              {phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="block text-purple-600 hover:text-purple-800"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;