import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiPhone, FiCheck, FiCpu, FiHeart, FiShield, FiUsers, FiAward } from 'react-icons/fi';
import dentistPremium from '../assets/dentist_premium.png';
import toothOrbit from '../assets/tooth_orbit.png';

export default function Hero() {
  const stats = [
    {
      icon: <FiUsers className="w-6 h-6 text-primary-blue" />,
      number: '5000+',
      label: 'Happy Patients'
    },
    {
      icon: <FiAward className="w-6 h-6 text-primary-blue" />,
      number: '10+',
      label: 'Years Experience'
    },
    {
      icon: <FiHeart className="w-6 h-6 text-primary-blue" />,
      number: '20+',
      label: 'Dental Specialists'
    },
    {
      icon: <FiCpu className="w-6 h-6 text-primary-blue" />,
      number: '100%',
      label: 'Modern Equipment'
    }
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex flex-col justify-between pt-24 pb-12 lg:py-0 bg-radial from-white via-brand-bg to-brand-bg overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-100 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-50 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6">
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left flex flex-col justify-center"
          >
            {/* Tagline */}
            <div>
              <span className="inline-flex items-center text-primary-blue text-xs font-extrabold uppercase tracking-widest bg-blue-50 border border-blue-200/50 px-4 py-1.5 rounded-full">
                A Healthy Smile, A Confident You
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-dark-900 font-bold leading-[1.12] tracking-tight">
              Transform Your <br />
              <span className="text-primary-blue text-glow">Smile</span> With Expert <br />
              <span className="text-accent-red">Dental Care</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-500 max-w-xl text-base sm:text-lg leading-relaxed font-normal">
              Advanced dental treatments, modern technology and compassionate care – all under one roof.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl font-bold tracking-wider text-xs uppercase bg-primary-blue text-white shadow-xl shadow-primary-blue/20 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <FiCalendar className="w-4 h-4 text-white" />
                Book Appointment
              </Link>
              
              <a
                href="tel:+919876543210"
                className="px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white border border-slate-200 hover:border-primary-blue hover:text-primary-blue text-slate-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-xs"
              >
                <FiPhone className="w-4 h-4 text-primary-blue" />
                <span>Call Now +91 98765 43210</span>
              </a>
            </div>

            {/* Patients Stats */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Patient 1" />
                <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Patient 2" />
                <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Patient 3" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-dark-900">5000+</div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Happy Patients</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image & Badges Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center items-center relative h-[420px] sm:h-[520px] lg:h-[620px] w-full self-center lg:-translate-y-2"
          >
            {/* Animated Floating Glow Particles */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-visible">
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[10%] left-[-10%] w-[100px] h-[100px] rounded-full bg-blue-400/10 blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 30, 0],
                  x: [0, -15, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-[20%] right-[-10%] w-[120px] h-[120px] rounded-full bg-blue-300/10 blur-xl"
              />
            </div>

            {/* Tooth Orbit/Bubble backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-8 lg:translate-y-12 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] flex items-center justify-center -z-10">
              {/* Outer dashed ring (clockwise) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] border border-dashed border-blue-200/30 rounded-full"
              />
              {/* Inner dotted ring (counter-clockwise) */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] border border-dotted border-blue-300/40 rounded-full"
              />
              
              <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] bg-blue-100/30 rounded-full blur-2xl" />
              
              {/* Floating Tooth Model */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] opacity-15 pointer-events-none select-none"
              >
                <img src={toothOrbit} alt="Tooth Orbit Art" className="w-full h-full object-contain" />
              </motion.div>
            </div>

            {/* Male Doctor Image Container */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[320px] sm:w-[440px] lg:w-[480px] max-h-full flex justify-center items-end select-none pointer-events-none z-10"
            >
              <img 
                src={dentistPremium} 
                alt="Expert Dentist Cure 'N' Care Dental Clinic" 
                className="w-full h-auto max-h-[115%] lg:max-h-[120%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] scale-115 sm:scale-120 lg:scale-128 origin-bottom"
              />
            </motion.div>

            {/* Floating Glass Badges */}
            {/* Top Left: Advanced Technology */}
            <motion.div 
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 25px 35px -5px rgba(11, 94, 215, 0.16), 0 12px 20px -5px rgba(11, 94, 215, 0.08)" 
              }}
              className="absolute top-24 left-0 sm:left-4 z-20 glass-card px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-sm border border-white/60 bg-white/75 cursor-pointer transition-all duration-300"
            >
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-primary-blue text-xs flex-shrink-0"
              >
                <FiCpu className="w-4 h-4" />
              </motion.div>
              <div className="text-left">
                <div className="text-[10px] font-extrabold text-dark-900">Advanced</div>
                <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Technology</div>
              </div>
            </motion.div>

            {/* Middle Left: Pain-Free Treatment */}
            <motion.div 
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 25px 35px -5px rgba(230, 57, 70, 0.16), 0 12px 20px -5px rgba(230, 57, 70, 0.08)" 
              }}
              className="absolute top-1/2 -left-6 sm:-left-2 z-20 glass-card px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-sm border border-white/60 bg-white/75 cursor-pointer transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-accent-red text-xs flex-shrink-0"
              >
                <FiHeart className="w-4 h-4" />
              </motion.div>
              <div className="text-left">
                <div className="text-[10px] font-extrabold text-dark-900">Pain-Free</div>
                <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Treatment</div>
              </div>
            </motion.div>

            {/* Bottom Left: Trusted Care */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 25px 35px -5px rgba(34, 197, 94, 0.16), 0 12px 20px -5px rgba(34, 197, 94, 0.08)" 
              }}
              className="absolute bottom-16 left-6 z-20 glass-card px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-sm border border-white/60 bg-white/75 cursor-pointer transition-all duration-300"
            >
              <motion.div 
                whileHover={{ rotate: -15 }}
                className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center text-green-600 text-xs flex-shrink-0"
              >
                <FiShield className="w-4 h-4" />
              </motion.div>
              <div className="text-left">
                <div className="text-[10px] font-extrabold text-dark-900">Trusted</div>
                <div className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Care</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Counter Bar Section */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-auto pt-6">
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-4 justify-center ${
                idx !== stats.length - 1 ? 'md:border-r border-slate-100' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-primary-blue">{stat.number}</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
