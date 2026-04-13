import React from 'react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: 'foundation-stone',
    name: 'Foundation Stone',
    price: '$750',
    unit: 'Per 10 Tonnes',
    delivery: '$150 Flat Delivery',
    description: 'Crushed heavy aggregate for load-bearing foundations and large scale builds.',
    features: ['Direct site tipping', 'Industrial grade', 'Available within 24hrs'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wall-stone',
    name: 'Stone Wall Supply',
    price: '$920',
    unit: 'Per 8 Tonnes',
    delivery: '$180 Flat Delivery',
    description: 'Sized and sorted stone ideal for structural and aesthetic stone wall projects.',
    features: ['Uniform sizing available', 'High durability', 'Multiple drop locations'],
    image: 'https://images.unsplash.com/photo-1505051508008-923feaf90180?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'river-gravel',
    name: 'River Gravel Bulk',
    price: '$580',
    unit: 'Per 10 Tonnes',
    delivery: '$120 Flat Delivery',
    description: 'Smooth river-sourced gravel for drainage, paths, and decorative fill.',
    features: ['Washed and clean', 'Easy drainage', 'Eco-sourced'],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800'
  }
];

const Packages = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold font-heading text-industrial-dark mb-6 uppercase tracking-tighter">
            Bulk Supply Packages
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-sans leading-relaxed">
            Transparent pricing. Professional logistics. We specialize in volume delivery for contractors and large residential projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div key={pkg.id} className="flex flex-col bg-industrial-beige/20 rounded-xl overflow-hidden border border-gray-100 transition duration-500 hover:shadow-2xl group">
              <div className="relative h-64 overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" />
                <div className="absolute top-4 right-4 bg-industrial-dark text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                  Bulk Load
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold font-heading text-industrial-dark mb-2 uppercase">{pkg.name}</h2>
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-industrial-dark">{pkg.price}</span>
                    <span className="text-gray-500 text-sm font-bold uppercase">{pkg.unit}</span>
                  </div>
                  <div className="mt-2 inline-block bg-industrial-brown text-white text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-widest">
                    {pkg.delivery}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 font-sans leading-relaxed flex-grow">
                  {pkg.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm font-bold text-gray-700 uppercase tracking-tight">
                      <span className="w-2 h-2 bg-industrial-green rounded-full mr-3"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link 
                  to={`/checkout?pkg=${pkg.id}`}
                  className="block text-center bg-industrial-dark hover:bg-industrial-green text-white font-bold py-5 rounded-lg transition duration-300 uppercase tracking-widest text-sm"
                >
                  Schedule Delivery
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
