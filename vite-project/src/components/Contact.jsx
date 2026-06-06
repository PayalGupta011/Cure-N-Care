import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiChevronRight, FiClock, FiCalendar } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Smile Design Veneers',
    date: '',
    time: 'morning' // morning, afternoon, evening
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setIsSubmitted(true);
  };

  const services = [
    'Smile Design Veneers',
    'Invisible Invisalign® Trays',
    'Laser Teeth Whitening',
    'Luxury Sedation Cleanings'
  ];

  return (
    <section className="py-24 bg-dark-950 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial from-slate-900/40 via-dark-950 to-dark-950 -z-10 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-blue">
            Reservations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Schedule Your Visit
          </h2>
          <p className="text-slate-400 font-normal">
            Request an appointment in our Jubilee Hills clinical lounge. Our concierge team will reach out to confirm your slot.
          </p>
        </div>

        {/* Contact Module / Card */}
        <div className="glass-card bg-white/5 border border-white/10 dark-glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary-blue transition-colors text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. aarav@example.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary-blue transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary-blue transition-colors text-sm"
                    />
                  </div>

                  {/* Treatment Category */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Desired Treatment</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 focus:outline-none focus:border-primary-blue transition-colors text-sm appearance-none cursor-pointer"
                      style={{ backgroundImage: 'radial-gradient(circle at right, transparent, transparent)' }}
                    >
                      {services.map((serv) => (
                        <option key={serv} value={serv} className="bg-dark-950 text-white">
                          {serv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <FiCalendar className="text-primary-blue" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 focus:outline-none focus:border-primary-blue transition-colors text-sm cursor-pointer"
                    />
                  </div>

                  {/* Time Blocks */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <FiClock className="text-primary-blue" />
                      Preferred Time-Frame
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['morning', 'afternoon', 'evening'].map((timeOption) => (
                        <button
                          key={timeOption}
                          type="button"
                          onClick={() => setFormData({ ...formData, time: timeOption })}
                          className={`py-3.5 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all duration-300 capitalize ${
                            formData.time === timeOption
                              ? 'bg-primary-blue border-primary-blue text-white'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {timeOption}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4.5 rounded-xl font-bold tracking-wider text-xs uppercase bg-white text-dark-950 hover:bg-primary-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-white/5"
                  >
                    Send Reservation Request
                    <FiChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full blue-gradient-bg flex items-center justify-center text-white shadow-xl shadow-primary-blue/20">
                  <FiCheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                    Request Received, {formData.name.split(' ')[0]}
                  </h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Our VIP concierge team will review your request for **{formData.service}** on **{formData.date}** ({formData.time}) and contact you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-white/10 text-xs font-bold tracking-wider uppercase text-slate-400 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  Schedule Another Appointment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
