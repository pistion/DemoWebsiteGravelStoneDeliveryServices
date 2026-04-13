import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Quote from './pages/Quote';
import Checkout from './pages/Checkout';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isDarkNav = ['/quote'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-white font-sans text-industrial-dark">
      <nav className={`absolute top-0 left-0 w-full z-50 py-6 px-12 flex justify-between items-center border-b ${isDarkNav ? 'bg-industrial-dark/50 border-white/5' : 'bg-transparent border-white/10'}`}>
        <Link to="/" className="text-2xl font-bold font-heading text-white tracking-tighter">
          TERRA<span className="text-industrial-sand">SUPPLY</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-white font-bold uppercase text-sm tracking-widest items-center">
          <Link to="/packages" className="hover:text-industrial-sand transition">Packages</Link>
          <Link to="/" className="hover:text-industrial-sand transition">Our Story</Link>
          <Link to="/quote" className="hover:text-industrial-sand transition border-b-2 border-transparent hover:border-industrial-sand pb-1">Get Quote</Link>
          <Link to="/packages" className="bg-white text-industrial-dark px-4 py-2 rounded hover:bg-industrial-sand transition">Order Now</Link>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-industrial-dark py-12 border-t border-white/10 text-white/60">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-xl font-bold font-heading text-white mb-6 md:mb-0">
            TERRASUPPLY
          </Link>
          <div className="flex space-x-6 text-sm mb-6 md:mb-0">
            <Link to="/" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition">Terms of Service</Link>
            <Link to="/quote" className="hover:text-white transition">Contact Us</Link>
          </div>
          <div className="text-sm">
            © 2026 Terra Supply Industrial. Grounded in Quality.
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
