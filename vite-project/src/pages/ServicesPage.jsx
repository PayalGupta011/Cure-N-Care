import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaStethoscope, 
  FaTooth, 
  FaHeartbeat, 
  FaBaby, 
  FaFlask, 
  FaRunning, 
  FaShieldAlt, 
  FaSmile, 
  FaCalendarAlt, 
  FaUsers, 
  FaPhoneAlt, 
  FaArrowRight 
} from 'react-icons/fa';
import bgClinic from '../assets/bg_clinic.jpg';

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const servicesList = [
    {
      title: 'General Medicine',
      description: 'Diagnosis, treatment, and prevention of common health conditions.',
      icon: <FaStethoscope className="w-6 h-6 text-blue-500" />,
      bgIcon: 'bg-blue-50',
      borderColor: 'hover:border-blue-300',
      hoverShadow: '0 20px 30px -5px rgba(59, 130, 246, 0.12), 0 10px 15px -5px rgba(59, 130, 246, 0.06)'
    },
    {
      title: 'Dental Care',
      description: 'Complete dental care solutions for a healthy and bright smile.',
      icon: <FaTooth className="w-6 h-6 text-emerald-500" />,
      bgIcon: 'bg-emerald-50',
      borderColor: 'hover:border-emerald-300',
      hoverShadow: '0 20px 30px -5px rgba(16, 185, 129, 0.12), 0 10px 15px -5px rgba(16, 185, 129, 0.06)'
    },
    {
      title: 'Cardiology',
      description: 'Advanced heart care for prevention, diagnosis and treatment.',
      icon: <FaHeartbeat className="w-6 h-6 text-red-500" />,
      bgIcon: 'bg-red-50',
      borderColor: 'hover:border-red-300',
      hoverShadow: '0 20px 30px -5px rgba(239, 68, 68, 0.12), 0 10px 15px -5px rgba(239, 68, 68, 0.06)'
    },
    {
      title: 'Pediatrics',
      description: 'Specialized care for infants, children and adolescents.',
      icon: <FaBaby className="w-6 h-6 text-purple-500" />,
      bgIcon: 'bg-purple-50',
      borderColor: 'hover:border-purple-300',
      hoverShadow: '0 20px 30px -5px rgba(168, 85, 247, 0.12), 0 10px 15px -5px rgba(168, 85, 247, 0.06)'
    },
    {
      title: 'Laboratory',
      description: 'Accurate testing and results with advanced laboratory technology.',
      icon: <FaFlask className="w-6 h-6 text-amber-500" />,
      bgIcon: 'bg-amber-50',
      borderColor: 'hover:border-amber-300',
      hoverShadow: '0 20px 30px -5px rgba(245, 158, 11, 0.12), 0 10px 15px -5px rgba(245, 158, 11, 0.06)'
    },
    {
      title: 'Physiotherapy',
      description: 'Pain relief, rehabilitation and improved mobility solutions.',
      icon: <FaRunning className="w-6 h-6 text-teal-500" />,
      bgIcon: 'bg-teal-50',
      borderColor: 'hover:border-teal-300',
      hoverShadow: '0 20px 30px -5px rgba(20, 184, 166, 0.12), 0 10px 15px -5px rgba(20, 184, 166, 0.06)'
    }
  ];

  const statsList = [
    {
      value: '15+',
      label: 'Specialties',
      icon: <FaUsers className="w-5 h-5 text-primary-blue" />
    },
    {
      value: '5000+',
      label: 'Happy Patients',
      icon: <FaSmile className="w-5 h-5 text-primary-blue" />
    },
    {
      value: '10+',
      label: 'Years of Experience',
      icon: <FaCalendarAlt className="w-5 h-5 text-primary-blue" />
    },
    {
      value: '24/7',
      label: 'Emergency Support',
      icon: <FaShieldAlt className="w-5 h-5 text-primary-blue" />
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
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-dark-900 leading-[1.15] tracking-tight">
            Comprehensive Care <br />
            <span className="blue-gradient-text">For a Healthier You</span>
          </h1>
          <p className="text-slate-500 max-w-lg text-base sm:text-lg leading-relaxed">
            We offer a wide range of medical services with advanced technology and expert care for you and your family.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary-blue hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md shadow-primary-blue/20 hover:shadow-lg hover:shadow-primary-blue/30 group"
            >
              <span>Book an Appointment</span>
              <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column (Masked Image and Overlay Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-6 relative flex justify-center lg:justify-end"
        >
          {/* Decorative Background Blob */}
          <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-100/50 rounded-full blur-[80px] opacity-60 -z-10 animate-pulse" />
          
          <div className="w-full max-w-[500px] h-[360px] relative group">
            {/* Organic rounded mask image */}
            <div className="w-full h-full overflow-hidden rounded-tr-[120px] rounded-bl-[120px] rounded-tl-[32px] rounded-br-[32px] border-4 border-white shadow-2xl">
              <img 
                src={bgClinic} 
                alt="Clinic Lobby" 
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 select-none"
              />
            </div>

            {/* Overlapping Floating Card - Compact, Glassmorphic, and Animated */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-4 -bottom-4 sm:-right-8 sm:-bottom-8 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-blue-50/20 shadow-2xl flex items-center gap-3 w-[220px] text-left z-20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary-blue flex-shrink-0">
                <FaShieldAlt className="w-5 h-5 text-primary-blue animate-pulse" />
              </div>
              <div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Patient First</span>
                <span className="text-xs font-extrabold text-dark-900 block leading-tight mt-0.5">100% Certified</span>
                <span className="text-[9px] text-slate-500 block font-semibold">Quality Care</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. Middle Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-blue mb-3 block">
          What We Offer
        </span>
        <div className="inline-block relative pb-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-900">
            Our Medical Services
          </h2>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary-blue rounded-full" />
        </div>

        {/* 6-Card Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                boxShadow: service.hoverShadow
              }}
              className={`group p-8 rounded-3xl bg-white border border-slate-100/80 transition-all duration-300 flex flex-col justify-between items-center text-center min-h-[280px] cursor-pointer`}
            >
              <div className="space-y-5 flex flex-col items-center w-full">
                {/* Colored Circle Icon Container */}
                <div className={`w-14 h-14 rounded-full ${service.bgIcon} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-inner`}>
                  {service.icon}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-dark-900 font-serif tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Learn More link */}
              <div className="pt-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 group-hover:text-primary-blue transition-colors duration-300">
                  <span>Learn More</span>
                  <FaArrowRight className="w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Bottom Stats and Emergency Contact Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-32">
        <div className="bg-blue-50/60 border border-blue-100/50 rounded-3xl p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-100 rounded-full blur-2xl opacity-60 -z-10" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-100 rounded-full blur-2xl opacity-60 -z-10" />

          {/* Left Column (24/7 Block and Contact button) */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Pulse circular 24/7 badge */}
            <div className="relative flex-shrink-0">
              <span className="absolute inset-0 rounded-full bg-primary-blue/20 animate-ping" />
              <div className="w-16 h-16 rounded-full bg-primary-blue flex items-center justify-center text-white font-extrabold text-sm border-2 border-white shadow-lg relative z-10">
                24/7
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-dark-900 tracking-tight">
                  We're here for you
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
                  Our team is available around the clock to provide emergency care and support.
                </p>
              </div>
              <div>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary-blue/30 hover:border-primary-blue bg-white text-primary-blue font-bold text-xs uppercase tracking-wider hover:bg-primary-blue hover:text-white transition-all duration-300 shadow-xs"
                >
                  <FaPhoneAlt className="w-3 h-3" />
                  <span>Emergency Contact</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (4 Stats Columns) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center lg:border-l lg:border-blue-100 lg:pl-8"
          >
            {statsList.map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 15 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: { type: 'spring', stiffness: 100, damping: 12 }
                  }
                }}
                className="space-y-2"
              >
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/80 border border-blue-100 flex items-center justify-center shadow-xs">
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold font-serif text-dark-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-normal mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
