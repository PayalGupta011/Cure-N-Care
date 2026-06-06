import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter, FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#031B33] text-white border-t border-white/5 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6 text-left">
            <Link to="/" className="flex items-center group">
              <img src={logo} alt="Cure 'N' Care Dental Clinic" className="h-14 w-auto object-contain bg-white p-1 rounded-lg animate-pulse" />
            </Link>
            <p className="text-sm text-slate-100 leading-relaxed">
              We provide advanced dental care with compassion and excellence. Your smile is our priority.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition-all duration-300">
                <FiFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition-all duration-300">
                <FiInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-300 transition-all duration-300">
                <FiTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-blue-500/40 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Doctors & Staff</Link>
              </li>
              <li>
                <a href="#testimonials" onClick={() => handleScrollToSection('testimonials')} className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <Link to="/contact" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-6 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-blue-500/40 pb-2">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Dental Implant</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Root Canal Treatment</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Teeth Whitening</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Braces & Aligners</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Smile Makeover</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-100 hover:text-blue-400 transition-colors duration-300">Kids Dentistry</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-6 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-blue-500/40 pb-2">Contact Us</h4>
            <ul className="space-y-3.5 text-sm text-slate-100">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>123, Smile Avenue, Dental City, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>info@curencaredental.com</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <FiClock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div>Mon - Sat: 10:00 AM - 8:00 PM</div>
                  <div>Sunday: By Appointment</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Our Location (Stylized map placeholder) */}
          <div className="space-y-6 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-blue-500/40 pb-2">Our Location</h4>
            <div className="rounded-xl overflow-hidden border border-white/10 h-[140px] relative bg-slate-900 shadow-sm flex items-center justify-center">
              {/* Embed map or stylized map mock */}
              <iframe 
                title="Cure N Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0392305527815!2d78.4069814!3d17.4346643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9135043bfbff%3A0xe54d24adab786b8d!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-100 uppercase tracking-widest font-semibold">
          <span>&copy; {currentYear} Cure 'N' Care Dental Clinic. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
