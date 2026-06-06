import React from 'react';
import { motion } from 'framer-motion';
import DoctorsStaff from '../components/DoctorsStaff';

export default function DoctorsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-brand-bg min-h-screen pt-20"
    >
      <DoctorsStaff />
    </motion.div>
  );
}
