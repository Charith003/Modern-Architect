import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const tags = ['2D Plans', '3D Elevations', 'Construction', 'Interiors', 'Vastu Planning'];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#151515] overflow-hidden"
      aria-label="About Modernarchitect Builders"
    >
      <div className="grid lg:grid-cols-2 min-h-[90vh] lg:min-h-screen">

        {/* ── Left: Image column ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden min-h-[55vw] sm:min-h-[50vw] lg:min-h-0"
        >
          <img
            src="/images/elevation2.jpg"
            alt="Premium residential architecture by Modernarchitect Builders"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Smooth gradient: fades right into the dark bg on desktop, bottom on mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#151515]/30 to-[#151515]/85 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/90 via-[#151515]/20 to-transparent lg:hidden" />

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.75 }}
            className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-gold-metallic px-5 py-4 shadow-xl"
          >
            <div
              className="font-display text-[#151515] leading-none mb-1"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              15+
            </div>
            <div className="section-label text-[#151515]/70 leading-snug">YEARS OF INDUSTRY</div>
            <div className="section-label text-[#151515]/70">EXPERIENCE</div>
          </motion.div>

          {/* Vertical side label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="absolute top-8 left-7 hidden sm:block"
            style={{ writingMode: 'vertical-rl' }}
          >
            <span className="section-label text-[#F5F0E7]/52 tracking-[0.28em]">
              ARCHITECTURE · CONSTRUCTION · INTERIORS
            </span>
          </motion.div>
        </motion.div>

        {/* ── Right: Text column ── */}
        <div className="flex items-center justify-center px-6 sm:px-10 md:px-14 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-[520px]">

            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-7 h-px bg-[#D4AF37] flex-shrink-0" />
              <span className="section-label text-gold-metallic tracking-[0.28em]">ABOUT US</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.85 }}
              className="font-display text-[#F5F0E7] mb-7"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.5rem)', lineHeight: 0.96 }}
            >
              MORE THAN
              <br />
              STRUCTURES.
              <br />
              <span className="text-gold-shimmer">SPACES WITH</span>
              <br />
              PURPOSE.
            </motion.h2>

            {/* Body paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.32, duration: 0.8 }}
              className="font-body text-[#A7A7A2] leading-relaxed mb-6"
              style={{ fontSize: 'clamp(13.5px, 1.3vw, 15.5px)' }}
            >
              At Modernarchitect Builders &amp; Interiors, we bring architectural
              thinking, practical planning and creative design together to shape
              spaces around the way people live. From 2D floor plans and 3D
              elevations to residential construction and interiors, our focus is on
              thoughtful design, functional spaces and attention to detail.
            </motion.p>

            {/* Experience highlight block — visually separated from paragraph */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.46, duration: 0.75 }}
              className="border-l-[3px] border-[#D4AF37] pl-4 mb-8 py-1"
            >
              <p
                className="font-display text-gold-metallic leading-tight"
                style={{ fontSize: 'clamp(15px, 1.8vw, 19px)' }}
              >
                15+ YEARS OF INDUSTRY EXPERIENCE
              </p>
              <p className="font-body text-[#A7A7A2]/75 text-[12.5px] mt-1.5">
                Chittoor, Andhra Pradesh · Est. Architecture Practice
              </p>
            </motion.div>

            {/* Service tags — intentional chip style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.75 }}
              className="flex flex-wrap gap-2 mb-9"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body font-extrabold text-[11px] text-[#121212] bg-gold-metallic px-3 py-1.5 tracking-[0.1em] uppercase shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA — prominent filled button */}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.7 }}
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group flex items-center gap-2.5 bg-gold-metallic text-[#121212] font-body font-extrabold text-[12px] tracking-[0.1em] uppercase px-7 py-4 transition-all duration-300 cursor-pointer shadow-xl"
              id="about-approach-btn"
            >
              DISCOVER OUR APPROACH
              <ArrowUpRight
                size={14}
                className="flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.button>

          </div>
        </div>

      </div>
    </section>
  );
}
