import React from 'react';
import { Sparkles, Palette, Droplet, Search } from 'lucide-react';

const services = [
  {
    title: 'Anti-aging Therapies',
    description: 'Advanced treatments to restore youthful radiance and maintain skin health.',
    icon: Sparkles,
    color: 'purple'
  },
  {
    title: 'Professional Makeup',
    description: 'Expert makeup services for weddings, corporate events, and special occasions.',
    icon: Palette,
    color: 'pink'
  },
  {
    title: 'Drips Lounge',
    description: 'Rejuvenating IV therapy treatments for wellness and beauty from within.',
    icon: Droplet,
    color: 'blue'
  },
  {
    title: 'Skin Analysis',
    description: 'Comprehensive skin assessment using advanced diagnostic technology.',
    icon: Search,
    color: 'indigo'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Premium Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience luxury treatments tailored to your unique beauty needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-${service.color}-100 text-${service.color}-600`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {service.description}
              </p>
              <div className="mt-4">
                <a
                  href="#"
                  className={`inline-flex items-center text-${service.color}-600 hover:text-${service.color}-700`}
                >
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;