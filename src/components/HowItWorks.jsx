import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Choose your project',
    description: 'Tell us what you’re building—whether it’s a home, a driveway, or a large-scale commercial foundation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Select a package',
    description: 'Pick the material package that fits your needs. We keep our ordering straightforward and transparent.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
    )
  },
  {
    number: '03',
    title: 'We deliver to your site',
    description: 'Our reliable delivery fleet brings the materials directly to your site, on time and ready to work.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-industrial-beige">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-industrial-dark mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto italic">
          No complicated orders. Just straightforward supply.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-industrial-sand -translate-y-12 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-industrial-dark text-white rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white transition-transform hover:scale-110">
                {step.icon}
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg border border-industrial-sand/50 shadow-sm w-full">
                <span className="text-industrial-brown font-bold text-sm uppercase tracking-widest mb-2 block">Step {step.number}</span>
                <h3 className="text-xl font-bold font-heading text-industrial-dark mb-4">{step.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
