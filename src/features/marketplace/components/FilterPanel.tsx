import React from 'react';
import { Filter } from 'lucide-react';

const FilterPanel = () => {
  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold flex items-center">
        <Filter className="h-5 w-5 mr-2" />
        Filters
      </h3>
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <select className="mt-1 block w-full rounded-md border-gray-300">
            <option>All Locations</option>
            <option>Kampala</option>
            <option>Nairobi</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Treatment Type</label>
          <select className="mt-1 block w-full rounded-md border-gray-300">
            <option>All Treatments</option>
            <option>Facials</option>
            <option>Massage</option>
            <option>IV Drips</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Range</label>
          <div className="mt-1 flex gap-2">
            <input type="number" placeholder="Min" className="w-1/2 rounded-md border-gray-300" />
            <input type="number" placeholder="Max" className="w-1/2 rounded-md border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;