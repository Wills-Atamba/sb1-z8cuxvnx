import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VirtualConsultation from './features/virtual-consultation/VirtualConsultation';
import Marketplace from './features/marketplace/Marketplace';
import Locations from './components/locations/Locations';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <VirtualConsultation />
      <Marketplace />
      <Locations />
    </div>
  );
}

export default App;