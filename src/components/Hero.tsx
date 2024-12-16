import React from 'react';
import { Calendar, ShoppingBag, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-600/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Where Science Meets Beauty
            <span className="block text-purple-200">Redefining African Aesthetics</span>
          </h1>
          
          <p className="mt-4 text-xl text-purple-100 max-w-3xl mx-auto">
            Experience luxury skincare tailored for African beauty. Our expert treatments combine cutting-edge science with traditional wisdom.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-purple-50 transition-colors">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Session
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Skin Analysis
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 hover:bg-purple-900 transition-colors">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;