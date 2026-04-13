import React from 'react';

const outcomes = [
  {
    title: 'Foundations',
    description: 'Bulk supply of high-density aggregate for residential and commercial foundations.',
    image: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=800',
    tag: 'Base Material'
  },
  {
    title: 'Stone Walls',
    description: 'Sized stone delivery for structural retaining walls and architectural features.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    tag: 'Structural Stone'
  },
  {
    title: 'Bulk Fill',
    description: 'High-volume gravel and stone delivery for large-scale site preparation.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
    tag: 'Volume Supply'
  }
];

const WhatWeBuild = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-industrial-dark mb-4">
            What We Help Build
          </h2>
          <div className="w-20 h-1 bg-industrial-brown mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((item, index) => (
            <div key={index} className="group bg-industrial-beige/30 rounded-lg overflow-hidden border border-gray-100 transition duration-300 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-industrial-dark text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-industrial-dark mb-4 italic">
                  “{item.title}”
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
