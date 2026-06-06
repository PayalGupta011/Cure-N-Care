import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaHandHoldingHeart, 
  FaEye, 
  FaAward, 
  FaUsers, 
  FaArrowRight 
} from 'react-icons/fa';
import bgClinic from '../assets/bg_clinic.jpg';

export default function About() {
  const pillars = [
    {
      title: 'Our Mission',
      description: 'To provide high-quality, accessible healthcare that enhances the well-being of our community.',
      icon: <FaHandHoldingHeart className="w-6 h-6 text-blue-500" />,
      bgIcon: 'bg-blue-50'
    },
    {
      title: 'Our Vision',
      description: 'To be a trusted healthcare provider known for excellence, innovation, and compassionate care.',
      icon: <FaEye className="w-6 h-6 text-emerald-500" />,
      bgIcon: 'bg-emerald-50'
    },
    {
      title: 'Our Values',
      description: 'Integrity, compassion, excellence and respect are at the heart of everything we do.',
      icon: <FaAward className="w-6 h-6 text-purple-500" />,
      bgIcon: 'bg-purple-50'
    },
    {
      title: 'Our Commitment',
      description: 'We are committed to continuous improvement and delivering the best care for every patient.',
      icon: <FaUsers className="w-6 h-6 text-blue-500" />,
      bgIcon: 'bg-blue-50'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-brand-bg min-h-screen pt-32 pb-24 font-sans text-brand-heading overflow-x-hidden"
    >
      {/* 1. Hero / Header Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary-blue bg-blue-50 border border-blue-200/50 px-3 py-1 rounded-full inline-block">
            About Us
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-dark-900 leading-[1.15] tracking-tight">
              We're Here for <br />
              <span className="blue-gradient-text">Your Better Health</span>
            </h1>
            {/* Short horizontal accent line */}
            <div className="w-12 h-1 bg-primary-blue rounded-full" />
          </div>
          <p className="text-slate-500 max-w-lg text-base sm:text-lg leading-relaxed font-normal">
            At Medicare Clinic, our mission is to deliver exceptional healthcare with compassion, innovation, and integrity. We are committed to providing personalized care and building lasting relationships with our patients.
          </p>
          <div className="pt-2">
            <Link
              to="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary-blue hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md shadow-primary-blue/20 hover:shadow-lg hover:shadow-primary-blue/30 group"
            >
              <span>Learn More About Us</span>
              <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column (Rounded Image and Blue Dotted Grid Decoration) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-6 relative flex justify-center lg:justify-end"
        >
          {/* Blue Dotted Pattern Grid */}
          <div className="absolute -top-6 -right-6 lg:-right-4 w-28 h-20 grid grid-cols-6 gap-2 opacity-50 z-0">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            ))}
          </div>

          <div className="w-full max-w-[540px] h-[360px] relative z-10 group">
            <div className="w-full h-full overflow-hidden rounded-[32px] border-4 border-white shadow-xl">
              <img 
                src={bgClinic} 
                alt="Clinic Lobby" 
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 select-none"
              />
            </div>

            {/* Overlapping Floating Card - Est. 2016 */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="absolute -left-6 -bottom-6 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-blue-50/20 shadow-2xl flex items-center gap-3 w-[220px] text-left z-20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-blue flex-shrink-0">
                <FaUsers className="w-5 h-5 text-primary-blue animate-pulse" />
              </div>
              <div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Established</span>
                <span className="text-xs font-extrabold text-dark-900 block leading-tight mt-0.5">10+ Years Care</span>
                <span className="text-[9px] text-slate-500 block font-semibold">Since 2016</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. Bottom 4-Pillar Principles Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32">
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div 
              key={pillar.title} 
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { type: 'spring', stiffness: 100, damping: 15 }
                }
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 px-6 py-6 rounded-3xl border border-transparent hover:border-slate-100 hover:bg-white/50 transition-all duration-300 group cursor-pointer"
            >
              {/* Circle Icon Container */}
              <div className={`w-14 h-14 rounded-full ${pillar.bgIcon} flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                {pillar.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-base font-bold text-dark-900 font-sans tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-[240px] md:max-w-none">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
