import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import DoctorsPage from './pages/DoctorsPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-bg text-brand-heading selection:bg-blue-200 selection:text-blue-900 antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating Green WhatsApp Widget */}
        <a
          href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Cure%20%27N%27%20Care%20Dental%20Clinic."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden" />
          <FaWhatsapp className="w-6 h-6 text-white" />
        </a>
      </div>
    </Router>
  );
}

export default App;
