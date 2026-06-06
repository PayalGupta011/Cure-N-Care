import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCalendar, FiPhone } from 'react-icons/fi';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors & Staff', path: '/doctors' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  // Helper to handle smooth scroll for hash links or navigate
  const handleLinkClick = (path) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-white/20 shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="Cure 'N' Care Dental Clinic" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path.startsWith('/#') && location.pathname === '/' && window.location.hash === link.path.substring(1));
              return (
                link.path.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-primary-blue font-semibold' : 'text-slate-600 hover:text-brand-heading'
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-primary-blue font-semibold' : 'text-slate-600 hover:text-brand-heading'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-1 right-1 h-[2px] bg-primary-blue rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              );
            })}
          </div>

          {/* Right side Red Book Appointment CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-accent-red text-white shadow-lg shadow-accent-red/15 hover:bg-red-600 hover:shadow-accent-red/25 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
            >
              <FiCalendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-heading focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-8 border-t border-slate-100"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {link.path.startsWith('/#') ? (
                      <a
                        href={link.path}
                        onClick={() => handleLinkClick(link.path)}
                        className={`text-2xl font-serif font-bold ${
                          isActive ? 'text-primary-blue' : 'text-brand-heading'
                        }`}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-serif font-bold ${
                          isActive ? 'text-primary-blue' : 'text-brand-heading'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 mb-12"
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 rounded-xl bg-accent-red text-white font-bold tracking-wider uppercase shadow-lg shadow-accent-red/20 hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiCalendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
