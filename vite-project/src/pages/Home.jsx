import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import DoctorsStaff from '../components/DoctorsStaff';
import BottomGrid from '../components/BottomGrid';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Hero />
      <Services />
      <WhyChooseUs />
      <DoctorsStaff />
      <BottomGrid />
    </motion.div>
  );
}
