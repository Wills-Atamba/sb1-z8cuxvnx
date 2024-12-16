import { Treatment } from '../../../types';

export const treatments: Treatment[] = [
  {
    id: '1',
    name: 'Luxury Facial',
    description: '60 min luxury facial treatment',
    duration: 60,
    price: 120,
    category: 'facial',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    availableLocations: ['Kampala', 'Nairobi']
  },
  // Add more treatments here
];