import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiPhone, FiCalendar, FiActivity, FiMessageSquare, FiStar, FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../assets/logo.png';
import teethBefore from '../assets/teeth_before.png';
import teethAfter from '../assets/teeth_after.png';

export default function BottomGrid() {
  // Before/After slider position
  const [sliderPos, setSliderPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(350);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSliderWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Testimonials Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const reviews = [
    {
      quote: "Amazing experience! The staff is so friendly and the treatment was completely painless. Highly recommend Cure \"N\" Care Dental Clinic.",
      rating: 5,
      name: "Priya Sharma",
      role: "Happy Patient",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Bespoke service with top-tier technology. The Veneers procedure was fast and the results exceeded my expectations.",
      rating: 5,
      name: "Aarav Sharma",
      role: "Happy Patient",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Professionalism and premium care. The clinical room looks extremely clean, and their scheduling is completely on time.",
      rating: 5,
      name: "Aditi Sharma",
      role: "Happy Patient",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
    }
  ];

  // Appointment Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Smile Makeover',
    date: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSliderMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - container.left;
    const percentage = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPos(percentage);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 3-Column Grid */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          
          {/* Column 1: Before & After */}
          <motion.div 
            id="gallery" 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { type: 'spring', stiffness: 100, damping: 15 }
              }
            }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-card bg-white p-8 rounded-3xl flex flex-col justify-between border border-slate-100 shadow-xs h-[500px] transition-all duration-300"
          >
            <div className="text-left space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-blue bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Before & After
              </span>
              <h3 className="text-2xl font-serif font-bold text-dark-900 tracking-tight">
                Real Results, <br />Beautiful Smiles
              </h3>
            </div>

            {/* Interactive Teeth Slider */}
            <div 
              ref={containerRef}
              className="my-6 relative flex-grow rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-100 min-h-[300px]"
              onMouseMove={(e) => {
                if (e.buttons === 1 || isResizing) handleSliderMove(e);
              }}
              onMouseDown={() => setIsResizing(true)}
              onMouseUp={() => setIsResizing(false)}
              onMouseLeave={() => setIsResizing(false)}
              onTouchMove={handleTouchMove}
            >
              {/* After State (Clean white teeth) */}
              <div className="absolute inset-0">
                <img 
                  src={teethAfter} 
                  alt="Restored Smile" 
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold text-primary-blue shadow-md uppercase tracking-wider">
                  Restored ✦
                </div>
              </div>

              {/* Before State (Yellow teeth - sliding overlay) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img 
                  src={teethBefore} 
                  alt="Original State" 
                  className="absolute top-0 left-0 h-full object-cover max-w-none select-none pointer-events-none"
                  style={{ width: `${sliderWidth}px` }}
                />
                <div className="absolute top-4 left-4 bg-accent-red/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold text-white shadow-md uppercase tracking-wider">
                  Original
                </div>
              </div>

              {/* Slider Handle Line */}
              <div 
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-md flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white select-none">
                  ↔
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-semibold text-slate-400 border-t border-slate-100 pt-4 uppercase tracking-wider">
              <span>Before</span>
              <span className="text-primary-blue">Drag slider to compare</span>
              <span>After</span>
            </div>
          </motion.div>

          {/* Column 2: Testimonials */}
          <motion.div 
            id="testimonials" 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { type: 'spring', stiffness: 100, damping: 15 }
              }
            }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-card bg-white p-8 rounded-3xl flex flex-col justify-between border border-slate-100 shadow-xs h-[500px] transition-all duration-300"
          >
            <div className="text-left space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-blue bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Testimonials
              </span>
              <h3 className="text-2xl font-serif font-bold text-dark-900 tracking-tight">
                What Our <br />Patients Say
              </h3>
            </div>

            {/* Quote block */}
            <div className="my-6 flex-grow flex flex-col justify-center text-left relative px-2">
              <span className="text-primary-blue text-6xl font-serif absolute -top-8 -left-4 opacity-15">“</span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{reviews[activeTestimonial].quote}"
                  </p>

                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(reviews[activeTestimonial].rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Profile info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <img 
                      src={reviews[activeTestimonial].avatar} 
                      alt={reviews[activeTestimonial].name} 
                      className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-xs" 
                    />
                    <div>
                      <h4 className="text-sm font-bold text-dark-900">{reviews[activeTestimonial].name}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        {reviews[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-3 justify-start items-center border-t border-slate-100 pt-4">
              <button 
                onClick={handlePrevTestimonial}
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary-blue hover:text-white transition-all cursor-pointer"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextTestimonial}
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary-blue hover:text-white transition-all cursor-pointer"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider ml-auto">
                {activeTestimonial + 1} / {reviews.length}
              </span>
            </div>
          </motion.div>

          {/* Column 3: Book Appointment Widget */}
          <motion.div 
            id="contact" 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { type: 'spring', stiffness: 100, damping: 15 }
              }
            }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-primary-blue text-white p-8 rounded-3xl flex flex-col justify-between shadow-xl shadow-primary-blue/15 h-[500px] relative overflow-hidden transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />

            <div className="text-left space-y-2 z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/80 bg-white/10 px-3 py-1 rounded-full">
                Book Appointment
              </span>
              <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                Schedule Your Visit
              </h3>
            </div>

            {/* Success state vs form state */}
            <div className="my-4 flex-grow flex flex-col justify-center z-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="appointment-widget-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-3 text-left"
                  >
                    {/* Full Name */}
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
                      <input 
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white transition-all text-xs"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
                      <input 
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white transition-all text-xs"
                      />
                    </div>

                    {/* Service Select */}
                    <div className="relative">
                      <FiActivity className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-slate-100 placeholder-white/60 focus:outline-none focus:border-white transition-all text-xs cursor-pointer appearance-none"
                      >
                        <option className="bg-primary-blue text-white" value="Smile Makeover">Smile Makeover</option>
                        <option className="bg-primary-blue text-white" value="Dental Implant">Dental Implant</option>
                        <option className="bg-primary-blue text-white" value="Root Canal Treatment">Root Canal</option>
                        <option className="bg-primary-blue text-white" value="Teeth Whitening">Teeth Whitening</option>
                        <option className="bg-primary-blue text-white" value="Braces & Aligners">Braces & Aligners</option>
                        <option className="bg-primary-blue text-white" value="Kids Dentistry">Kids Dentistry</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="relative">
                      <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4" />
                      <input 
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-slate-100 placeholder-white/60 focus:outline-none focus:border-white transition-all text-xs cursor-pointer"
                      />
                    </div>

                    {/* Message optional */}
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-4 text-white/50 w-4 h-4" />
                      <textarea 
                        rows="2"
                        placeholder="Message (Optional)"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white transition-all text-xs resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold bg-accent-red hover:bg-red-600 text-white transition-all text-xs uppercase tracking-wider shadow-md shadow-accent-red/20 cursor-pointer"
                    >
                      Book Appointment →
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="widget-booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-blue shadow-lg">
                      <FiCheckCircle className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold">Request Sent!</h4>
                      <p className="text-white/80 text-xs max-w-[200px] mx-auto leading-relaxed">
                        We will contact you shortly to finalize your slot.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white/80 hover:text-white"
                    >
                      New Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
