import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import bgClinic from '../assets/bg_clinic.jpg';

export default function WhyChooseUs() {
  const checklist = [
    'Experienced & Caring Dentists',
    'Advanced Technology',
    'Pain-Free Treatment',
    'Affordable Pricing',
    'Hygienic Environment',
    'Emergency Support'
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial from-blue-50 to-transparent opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-radial from-blue-50 to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Modern Clinic Chair Room Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-md border border-slate-100 group"
          >
            <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src={bgClinic} 
              alt="State of the art Cure 'N' Care Dental Clinic Lounge" 
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </motion.div>

          {/* Right Side Content & Checklist */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary-blue bg-blue-50 border border-blue-200/50 px-3 py-1 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-dark-900 font-bold leading-tight">
              Your Smile is <span className="text-accent-red">Our Priority</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We combine advanced technology with a gentle approach to deliver exceptional dental care for you and your family.
            </p>
            
            {/* 2-Column Checkbox Grid */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4"
            >
              {checklist.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, x: -10 },
                    visible: { 
                      opacity: 1, 
                      scale: 1, 
                      x: 0,
                      transition: { type: 'spring', stiffness: 100, damping: 14 }
                    }
                  }}
                  className="flex items-center gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    className="w-5 h-5 rounded-full bg-primary-blue flex items-center justify-center text-white text-[10px] flex-shrink-0 shadow-sm shadow-primary-blue/20 cursor-pointer transition-all duration-300"
                  >
                    <FiCheck />
                  </motion.div>
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
