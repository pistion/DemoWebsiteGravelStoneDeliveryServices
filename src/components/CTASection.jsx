import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-industrial-sand/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-industrial-dark mb-8">
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto font-sans leading-relaxed">
          From residential projects to commercial jobs, we provide the materials that build our community.
        </p>
        <Link to="/packages" className="inline-block bg-industrial-dark hover:bg-industrial-brown text-white font-bold py-5 px-12 rounded-lg text-lg transition duration-300 shadow-xl transform hover:-translate-y-1">
          View Packages
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
