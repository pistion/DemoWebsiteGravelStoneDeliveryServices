import React from 'react';

const stats = [
  { value: '500+', label: 'Tonnes Delivered', icon: '🚚' },
  { value: 'Trusted', label: 'By Local Builders', icon: '🤝' },
  { value: 'On-time', label: 'Delivery Guarantee', icon: '⏰' }
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-industrial-dark text-white overflow-hidden relative">
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-industrial-brown opacity-20 skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Stats Grid */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 leading-tight">
              A Record of Real Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 p-8 rounded-lg border border-white/20 transition hover:bg-white/15">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold font-heading text-industrial-sand mb-2">{stat.value}</div>
                  <div className="text-lg text-gray-300 font-sans">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Showcase */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=800"
                alt="Delivery truck"
                className="rounded-lg shadow-lg h-48 w-full object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
                alt="Construction materials"
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
                alt="Gravel site"
                className="rounded-lg shadow-lg h-64 w-full object-cover -mt-16"
              />
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800"
                alt="Finished work"
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
