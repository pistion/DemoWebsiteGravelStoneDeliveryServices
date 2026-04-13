import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image: Active Delivery Truck */}
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070"
        alt="Stone and gravel delivery truck at site"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight uppercase tracking-tighter">
            Direct Site Delivery <br/><span className="text-industrial-sand">Gravel & Stone</span>
          </h1>
          <p className="text-xl md:text-2xl font-sans mb-10 text-gray-200 border-l-4 border-industrial-sand pl-6">
            Bulk aggregate supply for stone walls and foundations. We deliver, you build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/packages" className="bg-white hover:bg-industrial-sand text-industrial-dark font-bold py-4 px-10 rounded transition duration-300 text-center uppercase tracking-widest text-sm">
              Book Delivery
            </Link>
            <Link to="/quote" className="border-2 border-white/30 hover:bg-white/10 text-white font-bold py-4 px-10 rounded transition duration-300 text-center uppercase tracking-widest text-sm">
              Bulk Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
