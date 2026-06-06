import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye } from 'react-icons/fi';

export default function Gallery() {
  const cases = [
    {
      id: 1,
      title: 'Full Veneer Reconstruction',
      desc: 'Corrected severe tooth discoloration and minor crowding using ultra-thin porcelain veneers.',
      beforeText: 'Discolored, uneven length and minor crowding.',
      afterText: 'Vibrant, symmetrical, natural translucent white.',
      beforeColor: 'from-blue-50/40 via-blue-100/10 to-slate-200/50',
      afterColor: 'from-blue-100/60 via-blue-200/30 to-blue-50/50',
      sparkle: true
    },
    {
      id: 2,
      title: 'Invisalign Alignment Studio',
      desc: 'Corrected severe gap issues and bite alignment without traditional metal braces.',
      beforeText: '3.5mm diastema gap and crossbite alignment.',
      afterText: 'Perfectly aligned, closed spacing, and enhanced facial profile.',
      beforeColor: 'from-red-50/30 via-slate-100 to-slate-200/40',
      afterColor: 'from-sky-100/50 via-indigo-50 to-blue-100/40',
      sparkle: false
    },
    {
      id: 3,
      title: 'Implants & Crown Restoration',
      desc: 'Replaced missing lateral incisors with high-strength ceramic crowns on titanium base.',
      beforeText: 'Missing incisors with advanced bone regression.',
      afterText: 'Fully restored chewing function and natural smile contour.',
      beforeColor: 'from-orange-50/30 via-slate-100/50 to-slate-200/50',
      afterColor: 'from-blue-100/50 via-blue-200/20 to-sky-50/40',
      sparkle: true
    }
  ];

  return (
    <section className="py-24 bg-dark-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-blue">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Smile Transformations
          </h2>
          <p className="text-slate-400 font-normal">
            Interact with our premium case studies. Click the tabs on each case study to view the Before and After results.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c) => {
            const [view, setView] = useState('after'); // 'before' or 'after'
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: c.id * 0.1 }}
                className="glass-card bg-white/5 border border-white/10 dark-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-400/30 transition-all duration-500 h-[480px]"
              >
                <div className="space-y-6">
                  {/* Category Details */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-blue">
                      Case #{100 + c.id}
                    </span>
                    {/* View Controller Tabs */}
                    <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                      <button
                        onClick={() => setView('before')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                          view === 'before'
                            ? 'bg-white/10 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => setView('after')}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                          view === 'after'
                            ? 'bg-primary-blue text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        After
                      </button>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 text-left">
                    <h3 className="text-xl font-bold font-serif text-white tracking-wide">
                      {c.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>

                {/* Animated Interactive Viewer Container */}
                <div className="my-6 relative flex-grow rounded-2xl overflow-hidden flex items-center justify-center border border-white/5 shadow-inner min-h-[160px]">
                  <AnimatePresence mode="wait">
                    {view === 'before' ? (
                      <motion.div
                        key="before"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 bg-gradient-to-tr ${c.beforeColor} flex flex-col items-center justify-center p-6 text-center`}
                      >
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">Original State</span>
                        <p className="text-sm font-semibold text-slate-300 max-w-[200px] leading-relaxed">
                          {c.beforeText}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="after"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 bg-gradient-to-tr ${c.afterColor} flex flex-col items-center justify-center p-6 text-center`}
                      >
                        {c.sparkle && (
                          <div className="absolute top-4 right-4 text-primary-blue text-lg animate-pulse">✦</div>
                        )}
                        <span className="text-[10px] font-bold tracking-widest uppercase text-primary-blue mb-2">Restored Smile</span>
                        <p className="text-sm font-serif font-bold text-dark-900 max-w-[200px] leading-relaxed">
                          {c.afterText}
                        </p>
                        {c.sparkle && (
                          <span className="text-[9px] font-bold text-primary-blue border border-blue-400/30 rounded-full px-2 py-0.5 mt-4">
                            Premium Translucency
                          </span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Case Info details */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  <span>Standard Treatment</span>
                  <span className="text-primary-blue">Guaranteed Results</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
