import React from 'react';

const BrandStory = () => {
  return (
    <section className="py-20 bg-industrial-sand/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=1000"
              alt="Bulk material supply yard"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-industrial-dark mb-6">
              Our Reliability is Your Foundation
            </h2>
            <p className="text-lg font-sans text-gray-700 mb-8 leading-relaxed">
              As a locally operated supplier, we understand that construction doesn't wait. 
              We've built our reputation on consistency, simplicity, and the real-world grit it 
              takes to keep your project moving forward. No flashy promises—just the materials 
              you need, exactly when you need them.
            </p>
            <ul className="space-y-4">
              {[
                'Locally operated',
                'Reliable delivery',
                'Built for real construction needs'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-industrial-green text-white p-1 rounded mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-lg font-bold text-industrial-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
