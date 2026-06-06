import React from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiArrowRight, FiUserCheck, FiActivity, FiUsers, FiCpu, FiMessageSquare } from 'react-icons/fi';
import doctorEmily from '../assets/doctor_emily.png';
import doctorMichael from '../assets/doctor_michael.png';
import doctorSarah from '../assets/doctor_sarah.png';

export default function DoctorsStaff() {
  const doctors = [
    {
      name: 'Dr. James Carter',
      specialty: 'Cardiologist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&h=350&q=80'
    },
    {
      name: 'Dr. Sophia Lee',
      specialty: 'Dermatologist',
      image: doctorSarah
    },
    {
      name: 'Dr. Michael Brown',
      specialty: 'Orthopedic Surgeon',
      image: doctorMichael
    },
    {
      name: 'Dr. Emily Davis',
      specialty: 'Pediatrician',
      image: doctorEmily
    }
  ];

  const staff = [
    {
      name: 'Sarah Johnson',
      role: 'Nurse',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=250&h=300&q=80',
      icon: <FiUsers className="w-4 h-4 text-purple-600" />,
      bgIcon: 'bg-purple-50'
    },
    {
      name: 'Lisa Anderson',
      role: 'Lab Technician',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=250&h=300&q=80',
      icon: <FiCpu className="w-4 h-4 text-emerald-600" />,
      bgIcon: 'bg-emerald-50'
    },
    {
      name: 'Priya Sharma',
      role: 'Receptionist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&h=300&q=80',
      icon: <FiMessageSquare className="w-4 h-4 text-yellow-600" />,
      bgIcon: 'bg-yellow-50'
    },
    {
      name: 'David Wilson',
      role: 'Admin Coordinator',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&h=300&q=80',
      icon: <FiActivity className="w-4 h-4 text-blue-600" />,
      bgIcon: 'bg-blue-50'
    },
    {
      name: 'Emma Thomas',
      role: 'Medical Assistant',
      image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=250&h=300&q=80',
      icon: <FiUserCheck className="w-4 h-4 text-rose-600" />,
      bgIcon: 'bg-rose-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="doctors" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dot grids */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-[radial-gradient(#bd9a62_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-[radial-gradient(#bd9a62_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Doctors Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 text-left space-y-5 lg:sticky lg:top-24"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary-blue bg-blue-50 border border-blue-200/50 px-3 py-1 rounded-full">
              Our Doctors
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-900 tracking-tight leading-tight">
              Meet Our <br />Expert Doctors
            </h2>
            <div className="w-12 h-1 bg-primary-blue rounded-full" />
            <p className="text-slate-500 text-sm leading-relaxed">
              Our experienced doctors are dedicated to providing the highest quality care with compassion and expertise.
            </p>
            <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-blue hover:text-blue-600 border border-slate-200 hover:border-primary-blue bg-white rounded-xl px-5 py-3 shadow-xs transition-all cursor-pointer">
              View All Doctors <FiArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Column Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {doctors.map((doc, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image block */}
                <div className="h-[260px] bg-slate-50 relative flex items-end justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-200/20 to-transparent pointer-events-none" />
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none" 
                  />
                </div>
                
                {/* Details Footer */}
                <div className="p-5 flex justify-between items-center text-left">
                  <div>
                    <h4 className="text-base font-bold text-dark-900 font-serif">{doc.name}</h4>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{doc.specialty}</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white group-hover:rotate-90 transition-all duration-300 cursor-pointer">
                    <FiPlus className="w-4 h-4 font-bold" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Staff Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-slate-100">
          
          {/* Left Column Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 text-left space-y-5 lg:sticky lg:top-24"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary-blue bg-blue-50 border border-blue-200/50 px-3 py-1 rounded-full">
              Our Staff
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-900 tracking-tight leading-tight">
              Our Dedicated <br />Team
            </h2>
            <div className="w-12 h-1 bg-primary-blue rounded-full" />
            <p className="text-slate-500 text-sm leading-relaxed">
              Our staff works together to ensure you receive the best care and support.
            </p>
            <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-blue hover:text-blue-600 border border-slate-200 hover:border-primary-blue bg-white rounded-xl px-5 py-3 shadow-xs transition-all cursor-pointer">
              View All Staff <FiArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Column Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {staff.map((st, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image block with floating icon overlay */}
                <div className="h-[200px] bg-slate-50 relative overflow-hidden flex items-end justify-center">
                  <img 
                    src={st.image} 
                    alt={st.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none" 
                  />
                  {/* Floating role icon badge centered on bottom edge of image container */}
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: idx * 0.15 }}
                    className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${st.bgIcon} flex items-center justify-center shadow-md border border-white z-10`}
                  >
                    {st.icon}
                  </motion.div>
                </div>

                {/* Details Footer */}
                <div className="p-4 text-center">
                  <h4 className="text-sm font-bold text-dark-900 font-serif">{st.name}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{st.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
