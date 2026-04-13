import React from 'react';

const Quote = () => {
  return (
    <div className="pt-32 pb-20 bg-industrial-dark min-h-screen text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Info Column */}
            <div className="p-12 bg-industrial-brown text-white">
              <h1 className="text-4xl font-bold font-heading mb-6 leading-tight">Get a Custom Quote</h1>
              <p className="text-lg opacity-80 mb-10 leading-relaxed font-sans italic">
                “Every project is unique. Let us help you calculate the exact material volume and delivery logistics for your specific needs.”
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">📍</div>
                  <span>Local site delivery</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">📊</div>
                  <span>Volume calculations</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">📞</div>
                  <span>Direct callback within 24hrs</span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="p-12 bg-white text-industrial-dark">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2">Project Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Westside Driveway" 
                    className="w-full bg-industrial-beige p-4 rounded border-none focus:ring-2 focus:ring-industrial-brown transition outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2">Contact Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-industrial-beige p-4 rounded border-none focus:ring-2 focus:ring-industrial-brown transition outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-industrial-beige p-4 rounded border-none focus:ring-2 focus:ring-industrial-brown transition outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-2">Project Details</label>
                  <textarea 
                    rows="4"
                    placeholder="Tell us about the project size, location, and required materials..." 
                    className="w-full bg-industrial-beige p-4 rounded border-none focus:ring-2 focus:ring-industrial-brown transition outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-industrial-dark hover:bg-industrial-brown text-white font-bold py-5 rounded-lg transition duration-300 transform active:scale-95 shadow-lg"
                >
                  Send Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
