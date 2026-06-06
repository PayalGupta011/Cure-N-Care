import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaPhoneAlt, 
  FaUsers, 
  FaClock, 
  FaClipboardList, 
  FaShieldAlt, 
  FaHeadphones, 
  FaUser, 
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import bgClinic from '../assets/bg_clinic.jpg';
import doctorImg from '../assets/doctor.png';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Smile Makeover',
    date: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;
    setIsSubmitted(true);
  };

  const statsList = [
    {
      title: 'Fast Booking',
      desc: 'Quick & easy appointment',
      icon: <FaClock className="w-5 h-5 text-primary-blue" />
    },
    {
      title: 'Expert Doctors',
      desc: 'Consult with highly experienced specialists',
      icon: <FaClipboardList className="w-5 h-5 text-primary-blue" />
    },
    {
      title: 'Quality Care',
      desc: 'Your health is our top priority',
      icon: <FaShieldAlt className="w-5 h-5 text-primary-blue" />
    },
    {
      title: '24/7 Support',
      desc: 'We are here to help you anytime',
      icon: <FaHeadphones className="w-5 h-5 text-primary-blue" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-brand-bg min-h-screen pt-28 pb-20 font-sans text-brand-heading overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* 1. Top Blue Hero Booking Banner */}
        <div className="relative rounded-[32px] blue-gradient-bg border border-blue-500/20 overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[460px]">
          {/* Heartbeat ECG Line Graphic Background */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none stroke-white" viewBox="0 0 800 400" fill="none" strokeWidth="2.5">
            <path d="M 0 200 L 250 200 L 270 150 L 290 260 L 310 170 L 330 230 L 350 200 L 800 200" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Dotted Grid Background Decoration */}
          <div className="absolute top-6 right-6 grid grid-cols-6 gap-1.5 opacity-30 pointer-events-none">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
          <div className="absolute bottom-6 left-6 grid grid-cols-6 gap-1.5 opacity-30 pointer-events-none">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>

          {/* Left Column (Content) */}
          <div className="z-10 text-left space-y-6 max-w-xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-3 pr-4 py-1 bg-white/10 rounded-full border border-white/20 select-none">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-primary-blue text-xs font-bold">
                <FaCalendarAlt className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-white">
                Your Health, Our Priority
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] tracking-tight">
              Book Your Appointment <br />
              <span className="text-[#87c6ff]">Today</span>
            </h1>

            {/* Paragraph */}
            <p className="text-white/80 text-sm sm:text-base font-normal leading-relaxed max-w-md">
              Schedule your visit with our expert doctors and experience quality care tailored to you.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#booking-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-primary-blue font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg group shadow-white/5"
              >
                <FaCalendarAlt className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
                <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
              >
                <FaPhoneAlt className="w-3 h-3" />
                <span>Call Us Now +91 98765 43210</span>
              </a>
            </div>
          </div>

          {/* Right Column (Doctor Portrait) */}
          <div className="z-10 relative flex justify-center lg:justify-end w-full lg:w-auto mt-6 lg:mt-0 select-none group">
            {/* Outer orbit rings */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-white/15 animate-spin pointer-events-none" 
              style={{ animationDuration: '60s' }}
            />
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-white/5 animate-spin pointer-events-none" 
              style={{ animationDuration: '40s', animationDirection: 'reverse' }}
            />

            {/* Multi-layered Glowing Background blobs */}
            <div className="absolute top-12 left-12 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl opacity-60 mix-blend-screen animate-pulse pointer-events-none" />
            <div className="absolute bottom-12 right-12 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none" />

            {/* Curved Premium Doctor Frame (the main container) */}
            <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] rounded-[48px] bg-gradient-to-tr from-white/15 to-white/5 backdrop-blur-md border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-end justify-center z-10 overflow-hidden group-hover:border-white/30 transition-all duration-500">
              
              {/* Background radial glow inside the frame */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(11,94,215,0.3),transparent_70%)]" />
              
              {/* Subtle decorative grid inside the card */}
              <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]" />

              {/* The Doctor Headshot with 3D Pop Out scale and drop shadow */}
              <motion.img 
                src={doctorImg} 
                alt="Doctor Representative" 
                className="w-[96%] h-auto max-h-[105%] object-contain object-bottom z-10 transition-transform duration-500 ease-out group-hover:scale-105 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
                style={{ transformOrigin: 'bottom center' }}
              />

              {/* Ambient bottom-fade gradient mask on the image itself, to hide hard torso cutoffs */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#034fa6] via-[#034fa6]/40 to-transparent z-20 pointer-events-none" />
            </div>

            {/* Floating Trusted Badge (Right Side) */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-blue-50 shadow-2xl flex items-center gap-3 w-[210px] text-left z-30 hover:scale-105 hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-blue flex-shrink-0">
                <FaUsers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Trusted by</span>
                <span className="text-base font-extrabold text-dark-900 block leading-none font-serif">5,000+</span>
                <span className="text-[9px] text-slate-500 block font-semibold mt-0.5">Happy Patients</span>
              </div>
            </motion.div>

            {/* Extra Floating Badge (Left Side): Best Clinic Badge */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute top-12 -left-4 sm:-left-12 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-blue-50 shadow-2xl flex items-center gap-2.5 w-[190px] text-left z-30 hover:scale-105 hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                <span className="text-xs font-bold">★</span>
              </div>
              <div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Top Rated</span>
                <span className="text-xs font-extrabold text-dark-900 block leading-none font-serif mt-0.5">Clinic Lounge</span>
                <span className="text-[9px] text-slate-500 block font-semibold">Delhi NCR Ranked #1</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 2. Bottom Stats Overlay Bar */}
        <div className="relative -mt-12 z-20 max-w-6xl mx-auto bg-white border border-slate-100/80 rounded-3xl p-6 sm:p-8 shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {statsList.map((stat, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 px-4 text-left lg:border-r lg:border-slate-100 lg:last:border-r-0 lg:first:pl-0"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center text-primary-blue flex-shrink-0 shadow-inner">
                {stat.icon}
              </div>
              {/* Text */}
              <div className="space-y-0.5">
                <h4 className="text-xs font-extrabold text-dark-900 uppercase tracking-wider">{stat.title}</h4>
                <p className="text-[10px] text-slate-400 font-semibold leading-normal">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Middle Section: Appointment Form & Location Grid */}
        <div id="booking-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8">
          
          {/* Left Column: Detailed Appointment Booking Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100/80 shadow-md text-left flex flex-col justify-between">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-blue bg-blue-50 border border-blue-200/50 px-3 py-1 rounded-full">
                Schedule Slots
              </span>
              <h2 className="text-3xl font-serif font-bold text-dark-900 tracking-tight">Book Your Slot</h2>
              <p className="text-slate-500 text-xs sm:text-sm">Please fill out the details below to request a prioritized appointment slot with our master doctors.</p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="appointment-booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <input 
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-blue transition-all bg-slate-50/30"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                      <input 
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-blue transition-all bg-slate-50/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Selection */}
                    <div className="relative">
                      <FaClipboardList className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-blue transition-all bg-slate-50/30 cursor-pointer appearance-none text-slate-600 font-semibold"
                      >
                        <option value="Smile Makeover">Smile Makeover</option>
                        <option value="Dental Implant">Dental Implant</option>
                        <option value="Root Canal Treatment">Root Canal</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Braces & Aligners">Braces & Aligners</option>
                        <option value="Kids Dentistry">Kids Dentistry</option>
                      </select>
                    </div>

                    {/* Date Picker */}
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <input 
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-blue transition-all bg-slate-50/30 cursor-pointer text-slate-600 font-semibold"
                      />
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div className="relative">
                    <textarea 
                      rows="4"
                      placeholder="Symptoms or custom notes (optional)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-primary-blue transition-all bg-slate-50/30 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold bg-primary-blue hover:bg-blue-600 text-white transition-all text-xs uppercase tracking-wider shadow-md shadow-primary-blue/20 cursor-pointer"
                  >
                    Confirm Appointment Slot
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="form-booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-12"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center text-xl shadow-inner">
                    <FaCheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-serif text-dark-900">Appointment Request Sent!</h3>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you, **{formData.name}**. We have received your request for **{formData.service}** on **{formData.date}**. Our coordinator will contact you shortly to confirm.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 rounded-full border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-dark-900 transition-all cursor-pointer bg-white"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Google Maps & Quick details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Stacked Location Cards */}
            <div className="space-y-4">
              {/* Visit Us */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-start gap-4 text-left shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-primary-blue flex-shrink-0 shadow-inner">
                  <FaMapMarkerAlt className="w-4.5 h-4.5 text-primary-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark-900 font-serif">Visit Our Clinic</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    123 Health Avenue, Medical District, <br />New Delhi - 110001, India
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-start gap-4 text-left shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-primary-blue flex-shrink-0 shadow-inner">
                  <FaClock className="w-4.5 h-4.5 text-primary-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark-900 font-serif">Working Hours</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Mon - Sat : 9:00 AM - 8:00 PM</p>
                  <p className="text-[11px] text-slate-500">Sunday : 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              {/* Call Us / Emergency Support */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-start gap-4 text-left shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-primary-blue flex-shrink-0 shadow-inner">
                  <FaPhoneAlt className="w-4 h-4 text-primary-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark-900 font-serif">Call Us</h4>
                  <p className="text-xs text-slate-500 mt-1">General: <span className="font-bold text-slate-700">+91 98765 43210</span></p>
                  <p className="text-xs text-slate-500">Emergency: <span className="font-bold text-primary-blue">+91 11 2345 6789</span></p>
                </div>
              </div>
            </div>

            {/* Google Map Frame */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 p-2 shadow-xs flex-grow min-h-[200px]">
              <iframe 
                title="Medicare Clinic AIIMS New Delhi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.923838270505!2d77.2039868!3d28.5627581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26fe3e3eb4b%3A0x6e9f5bf77cd16b8d!2sAIIMS%20Hospital%2C%20Ansari%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110029!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" 
                className="w-full h-full min-h-[220px] border-0 rounded-2xl"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
