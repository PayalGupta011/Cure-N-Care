import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiSmile, FiShield, FiSliders, FiSun, FiHeart, FiStar, FiActivity } from 'react-icons/fi';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const servicesList = [
    {
      title: 'Dental Implant',
      description: 'Permanent solutions for missing teeth.',
      icon: <FiShield className="w-5 h-5 text-primary-blue" />,
      bgIcon: 'bg-blue-50'
    },
    {
      title: 'Root Canal Treatment',
      description: 'Painless treatment for tooth infections.',
      icon: <FiActivity className="w-5 h-5 text-accent-red" />,
      bgIcon: 'bg-red-50'
    },
    {
      title: 'Teeth Whitening',
      description: 'Brighten your smile safely and effectively.',
      icon: <FiSun className="w-5 h-5 text-yellow-500" />,
      bgIcon: 'bg-yellow-50'
    },
    {
      title: 'Braces & Aligners',
      description: 'Straighten your teeth for a perfect smile.',
      icon: <FiSliders className="w-5 h-5 text-indigo-500" />,
      bgIcon: 'bg-indigo-50'
    },
    {
      title: 'Smile Makeover',
      description: 'Enhance your smile with expert care.',
      icon: <FiSmile className="w-5 h-5 text-teal-500" />,
      bgIcon: 'bg-teal-50'
    },
    {
      title: 'Kids Dentistry',
      description: 'Special care for your little ones.',
      icon: <FiStar className="w-5 h-5 text-pink-500" />,
      bgIcon: 'bg-pink-50'
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[700px] rounded-full bg-blue-50 blur-[130px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-blue bg-blue-50 border border-blue-200/50 px-3 py-1 rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-dark-900 font-bold leading-tight">
              Comprehensive Dental Solutions
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-blue hover:text-blue-600 transition-colors py-2 border border-slate-200 rounded-xl px-4 bg-white shadow-xs self-start sm:self-auto"
          >
            <span>View All Services</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6-Card Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-300 hover:shadow-lg hover:shadow-primary-blue/5 transition-all duration-300 flex flex-col justify-between text-center items-center min-h-[260px]"
            >
              <div className="space-y-6 flex flex-col items-center">
                {/* Circle Icon */}
                <div className={`w-14 h-14 rounded-full ${service.bgIcon} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner`}>
                  {service.icon}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-dark-900 font-serif tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Learn More link */}
              <div className="pt-6">
                <Link 
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-slate-400 group-hover:text-primary-blue transition-colors duration-300"
                >
                  Learn More
                  <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
