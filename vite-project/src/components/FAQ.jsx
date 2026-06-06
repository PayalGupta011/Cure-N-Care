import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: 'What makes Cure \'N\' Care Dental Clinic a luxury experience?',
      a: 'We combine a boutique hotel aesthetic with elite oral clinicians. From our noise-cancelling headphone menu and streaming ceiling TVs, to our zero-wait guarantee and board-certified anesthesiologists, we make dental visits completely anxiety-free.'
    },
    {
      q: 'Do you accept insurance policies?',
      a: 'Yes, we accept and process all PPO dental insurance policies. While luxury services like veneers or cosmetic whitening may have varying coverage, our concierge billing team handles all pre-authorizations and files paperwork on your behalf.'
    },
    {
      q: 'What sedation options do you offer for anxious patients?',
      a: 'We offer a complete sedation menu including nitrous oxide (laughing gas), oral conscious sedation (prescription relaxants), and full IV deep sleep sedation supervised directly by board-certified medical anesthesiologists.'
    },
    {
      q: 'How many visits are required for a Porcelain Veneer Smile Design?',
      a: 'Typically, just two visits. During your first session, we scan and design your mockups digitally using 3D printers. In the second session, we bond the handcrafted, custom porcelain veneers onto your teeth, creating your final dream smile.'
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-blue bg-blue-50 border border-blue-200/50 px-3 py-1 rounded-full">
            Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-dark-900 font-bold leading-tight">
            Frequently Asked
          </h2>
          <p className="text-slate-500 font-normal">
            Understand the Cure 'N' Care standard, billing procedures, and customized anxiety-free services.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card hover:border-blue-300/40 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left font-sans text-dark-900 focus:outline-none"
                >
                  <span className="font-semibold text-sm sm:text-base tracking-wide pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0"
                  >
                    <FiChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100/50 pt-4 text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
