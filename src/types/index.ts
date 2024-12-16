export interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: 'facial' | 'body' | 'massage' | 'drip' | 'makeup';
  image: string;
  availableLocations: string[];
}

export interface SkinAnalysisResult {
  skinType: string;
  concerns: string[];
  recommendations: {
    treatments: string[];
    products: string[];
    lifestyle: string[];
  };
}

export interface Practitioner {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  image: string;
  availability: {
    locationId: string;
    slots: string[];
  }[];
  rating: number;
  reviews: number;
}

export interface Booking {
  id: string;
  userId: string;
  treatmentId: string;
  practitionerId: string;
  locationId: string;
  datetime: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
}