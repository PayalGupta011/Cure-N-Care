import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Priyank Patel',
      role: 'Fashion Entrepreneur',
      service: 'Smile Makeover (Veneers)',
      quote: 'Dr. Emily and her team completely redesigned my smile. The luxury lounge feels like a boutique spa, and the anxiety-free sedation was a complete game changer!',
      rating: 5
    },
    {
      name: 'Aditi Sharma',
      role: 'Tech Executive',
      service: 'Invisalign & Laser Whitening',
      quote: 'I loved the absolute precision and respect for my time. No waiting lists, cutting-edge scanners, and the results of the laser whitening blew me away. 10/10.',
      rating: 5
    },
    {
      name: 'Rohan Malhotra',
      role: 'Lead Architect',
      service: 'Luxury Dental Implants',
      quote: 'As an architect, I appreciate fine details. Cure \'N\' Care approaches dentistry like high architecture. Every step was fully explained in 3D, and the implants look indistinguishable from my real teeth.',
      rating: 5
    },
    {
      name: 'Meera Rao',
      role: 'Creative Director',
      service: 'Porcelain Veneers',
      quote: 'The level of professionalism and luxury is unmatched. The ceiling screen allowed me to watch my favorite shows during the procedure. Highly recommend Cure \'N\' Care Dental.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-dark-950 to-transparent opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-blue bg-blue-50 border border-blue-200/50 px-3 py-1 rounded-full">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-dark-900 font-bold leading-tight">
            Loved By Taste-makers
          </h2>
          <p className="text-slate-500 font-normal">
            Read how we recreate smiles and dental experiences for our VIP guests in Jubilee Hills.
          </p>
        </div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-12"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="premium-swiper py-4"
          >
            {reviews.map((rev, idx) => (
              <SwiperSlide key={rev.name}>
                <div className="glass-card hover:border-blue-300/40 p-8 rounded-3xl shadow-xs transition-all duration-300 flex flex-col justify-between min-h-[320px] text-left">
                  {/* Review Stars & Service */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 text-primary-blue">
                        {[...Array(rev.rating)].map((_, i) => (
                          <FiStar key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary-blue bg-blue-50 px-2 py-0.5 rounded-md">
                        {rev.service}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-slate-600 text-sm leading-relaxed italic">
                      "{rev.quote}"
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full blue-gradient-bg flex items-center justify-center text-white text-xs font-serif font-bold">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-dark-900">{rev.name}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{rev.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>

      {/* Inline style over-ride to make pagination blue */}
      <style>{`
        .premium-swiper .swiper-pagination-bullet {
          background: #0B5ED7 !important;
          opacity: 0.3;
        }
        .premium-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          transition: all 0.3s;
        }
      `}</style>
    </section>
  );
}
