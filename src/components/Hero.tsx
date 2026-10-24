import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0c0c0c]"
      aria-label="Hero section"
    >
      {/* Background Image — left-heavy overlay keeps house visible on right */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 scale-105 origin-top pointer-events-none"
      >
        <img
          src="/images/hero.jpg"
          alt="Modern Architectural Design and Construction"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Primary text-protection: strong on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/80 to-[#0c0c0c]/15" />
        {/* Top + bottom vignettes for nav and stats legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/75 via-transparent to-[#0c0c0c]/45" />
      </motion.div>

      {/* Architectural grid overlay */}
      <div className="absolute inset-0 arch-grid opacity-25 pointer-events-none" />

      {/* Top golden accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-transparent" />

      {/* Main content — flex column that fills the screen, content centred vertically */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center flex-1 min-h-screen py-28 sm:py-32 md:py-36">

        {/* Content column — capped at a sensible reading width */}
        <div className="w-full max-w-[640px]">

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/40 mb-7 shadow-sm shadow-[#D4AF37]/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse flex-shrink-0" />
            <span className="font-body text-[11px] sm:text-xs font-extrabold tracking-[0.22em] text-gold-metallic uppercase">
              YOUR VISION. OUR BLUEPRINT.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14 }}
            className="flex flex-col mb-7"
          >
            <h1
              className="font-display tracking-tight text-white leading-[1.02]"
              style={{ fontSize: 'clamp(2.4rem, 7.5vw, 5.25rem)' }}
            >
              WE PLAN.
            </h1>
            <h2
              className="font-display tracking-tight text-white leading-[1.02]"
              style={{ fontSize: 'clamp(2.4rem, 7.5vw, 5.25rem)' }}
            >
              WE DESIGN.
            </h2>
            <h2
              className="font-display tracking-tight leading-[1.02]"
              style={{ fontSize: 'clamp(2.4rem, 7.5vw, 5.25rem)' }}
            >
              <span className="text-gold-shimmer">WE BUILD.</span>
            </h2>
          </motion.div>

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="font-body text-[15px] sm:text-base md:text-[17px] text-slate-200/90 leading-relaxed mb-8 font-normal"
          >
            From intelligent floor plans to striking 3D elevations, quality
            construction and refined interiors — we create spaces designed around
            the way you live.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.42 }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 mb-10 sm:mb-12"
          >
            <button
              onClick={() => handleScroll('#projects')}
              className="group inline-flex items-center justify-center gap-2 bg-gold-metallic font-body font-extrabold text-[13px] tracking-[0.08em] uppercase px-7 py-4 rounded-sm transition-all duration-300 shadow-xl cursor-pointer whitespace-nowrap"
              id="hero-explore-btn"
            >
              EXPLORE OUR PROJECTS
              <ArrowUpRight
                size={16}
                className="flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <button
              onClick={() => handleScroll('#enquiry')}
              className="group inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 border border-white/25 hover:border-white/60 text-white font-body font-bold text-[13px] tracking-[0.08em] uppercase px-6 py-4 rounded-sm transition-all duration-300 backdrop-blur-sm cursor-pointer whitespace-nowrap"
              id="hero-start-btn"
            >
              START YOUR PROJECT
              <ArrowUpRight
                size={15}
                className="flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </motion.div>

          {/* Trust statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.58 }}
            className="border-t border-white/12 pt-6 sm:pt-7"
          >
            <div className="grid grid-cols-3 gap-4">
              {/* Stat 1 */}
              <div className="flex flex-col gap-1">
                <span className="font-display text-gold-metallic leading-none" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)' }}>
                  15+
                </span>
                <span className="font-body text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 uppercase leading-tight">
                  Years of Experience
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-1 border-l border-white/12 pl-4">
                <span className="font-display text-gold-metallic leading-none" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)' }}>
                  100k+
                </span>
                <span className="font-body text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 uppercase leading-tight">
                  INSTAGRAM FOLLOWERS
                </span>
              </div>

              {/* Stat 3 — services tag */}
              <div className="flex flex-col justify-center border-l border-white/12 pl-4">
                <span className="font-body text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-200 uppercase leading-snug">
                  Arch<span className="text-[#D4AF37]">·</span>
                  <br className="sm:hidden" />
                  Build<span className="text-[#D4AF37]">·</span>
                  <br className="sm:hidden" />
                  Interior
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2 z-10">
        <button
          onClick={() => handleScroll('#social-proof')}
          className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#FFD43B] transition-colors cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span className="font-body text-[10px] font-bold tracking-[0.22em] uppercase">
            SCROLL
          </span>
          <ArrowDown size={13} className="animate-bounce text-[#FFD43B]" />
        </button>
      </div>
    </section>
  );
}
