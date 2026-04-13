import React from 'react';
import { useLocation } from 'react-router-dom';

const packagesData = {
  'foundation-stone': { name: 'Foundation Stone (10T)', price: 750, delivery: 150 },
  'wall-stone': { name: 'Stone Wall Supply (8T)', price: 920, delivery: 180 },
  'river-gravel': { name: 'River Gravel Bulk (10T)', price: 580, delivery: 120 }
};

const Checkout = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pkgId = params.get('pkg') || 'foundation-stone';
  const pkg = packagesData[pkgId];

  return (
    <div className="pt-32 pb-20 bg-industrial-beige min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Form Side */}
          <div className="flex-grow bg-white p-10 rounded-lg shadow-xl border border-industrial-sand">
            <h1 className="text-3xl font-bold font-heading text-industrial-dark mb-10 border-b pb-4 uppercase tracking-tighter">Site Delivery Logistics</h1>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <section>
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-l-2 border-industrial-brown pl-4">Delivery Site Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-black uppercase tracking-widest mb-2">Drop-off Site Address</label>
                    <input type="text" placeholder="Full street address and site entry details" className="w-full border-2 border-industrial-beige p-4 rounded focus:border-industrial-dark transition outline-none font-sans" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-2">On-Site Contact Name</label>
                    <input type="text" className="w-full border-2 border-industrial-beige p-4 rounded focus:border-industrial-dark transition outline-none font-sans" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-2">Direct Contact Phone</label>
                    <input type="text" className="w-full border-2 border-industrial-beige p-4 rounded focus:border-industrial-dark transition outline-none font-sans" />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-l-2 border-industrial-brown pl-4">Payment Information</h2>
                <div className="space-y-4 font-sans">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest mb-2">Card Holder Name</label>
                    <input type="text" className="w-full border-2 border-industrial-beige p-4 rounded focus:border-industrial-dark transition outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                      <label className="block text-xs font-black uppercase tracking-widest mb-2">Card Number</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full border-2 border-industrial-beige p-4 rounded focus:border-industrial-dark transition outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest mb-2">Expiry</label>
                      <input type="text" placeholder="MM/YY" className="w-full border-2 border-industrial-beige p-4 rounded focus:border-industrial-dark transition outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest mb-2">CVV</label>
                      <input type="text" placeholder="123" className="w-full border-2 border-industrial-beige p-4 rounded focus:border-industrial-dark transition outline-none" />
                    </div>
                  </div>
                </div>
              </section>

              <button className="w-full bg-industrial-dark hover:bg-industrial-green text-white font-black py-5 rounded-lg text-lg transition duration-300 shadow-xl uppercase tracking-widest">
                Confirm & Schedule Delivery
              </button>
            </form>
          </div>

          {/* Sidebar Side */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white text-industrial-dark p-8 rounded-lg shadow-xl sticky top-32 border-4 border-industrial-dark">
              <h2 className="text-2xl font-black font-heading mb-8 border-b-2 border-industrial-beige pb-4 uppercase tracking-tighter">Delivery Summary</h2>
              
              <div className="space-y-6 mb-8 font-sans">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-black text-lg uppercase leading-tight">{pkg.name}</div>
                    <div className="text-xs font-bold text-gray-400 mt-1 uppercase">Bulk Material Cost</div>
                  </div>
                  <div className="font-black text-xl">${pkg.price}</div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-gray-400 uppercase tracking-widest">Flat Rate Delivery</span>
                  <span className="font-black">${pkg.delivery}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-dashed border-gray-200 pt-4">
                  <span className="font-bold text-gray-400 uppercase tracking-widest">Handling Fees</span>
                  <span className="font-black">INCLUDED</span>
                </div>
              </div>

              <div className="border-t-4 border-industrial-dark pt-6 flex justify-between items-baseline">
                <span className="text-xl font-heading uppercase tracking-widest font-black">Total Due</span>
                <span className="text-4xl font-black text-industrial-green">${pkg.price + pkg.delivery}.00</span>
              </div>

              <div className="mt-8 p-4 bg-industrial-beige/50 rounded-lg text-[10px] text-center font-bold uppercase tracking-widest leading-relaxed">
                Site delivery will be confirmed via phone within 2 business hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
