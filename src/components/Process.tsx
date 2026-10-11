import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, PenLine, Eye, HardHat, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'DISCOVER',
    description:
      'Understand the vision, needs and budget. A conversation about how you live and what your space needs to achieve.',
    color: '#D4AF37',
  },
  {
    number: '02',
    icon: PenLine,
    title: 'PLAN',
    description:
      'Develop layouts, architectural concepts and project requirements — from initial sketches to detailed 2D floor plans.',
    color: '#2563EB',
  },
  {
    number: '03',
    icon: Eye,
    title: 'VISUALIZE',
    description:
      'Present elevation concepts and design visualizations. See your home in 3D before the first brick is laid.',
    color: '#F36B38',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'BUILD',
    description:
      'Coordinate construction and execution according to the agreed scope. Quality workmanship at every stage.',
    color: '#D4AF37',
  },
  {
    number: '05',
    icon: CheckCircle2,
    title: 'DELIVER',
    description:
      'Complete the project in line with the agreed specifications and finishing requirements. Your home, realized.',
    color: '#2563EB',
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-[#F5F0E7] py-16 md:py-24 overflow-hidden"
      aria-label="Design to build process"
    >
      {/* Blueprint dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(#151515 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Right accent bar */}
      <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#2563EB]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-14 md:mb-16">
          {/* Left: label + headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-7 h-px bg-[#2563EB] flex-shrink-0" />
              <span className="section-label text-[#2563EB] tracking-[0.28em]">THE PROCESS</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.85 }}
              className="font-display text-[#151515]"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4.25rem)', lineHeight: 0.94 }}
            >
              FROM FIRST
              <br />
              <span className="text-[#2563EB]">SKETCH</span>
              <br />
              TO FINAL
              <br />
              STRUCTURE.
            </motion.h2>
          </div>

          {/* Right: intro paragraph, vertically aligned to bottom on large screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="flex items-end"
          >
            <p
              className="font-body text-[#151515]/60 leading-relaxed"
              style={{ fontSize: 'clamp(14px, 1.4vw, 16px)' }}
            >
              Every project is unique. This outline gives you an understanding of
              our general approach — the actual process is shaped around your
              specific requirements, scope and timeline.
            </p>
          </motion.div>
        </div>

        {/* ── Process Steps ── */}
        <div className="relative">

          {/* Desktop horizontal connecting line — sits at icon center (icon box is 88px tall, center = 44px) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.55, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute h-px bg-[#151515]/15 origin-left"
            style={{ top: '44px', left: '44px', right: '44px' }}
          />

          {/* Mobile vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.55, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute w-px bg-[#151515]/15 origin-top"
            style={{ top: '44px', bottom: '44px', left: '43px' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.28 + i * 0.13, duration: 0.65 }}
                  className="relative group flex lg:flex-col items-start gap-5 lg:gap-0"
                >
                  {/* Icon circle */}
                  <div
                    className="relative z-10 flex-shrink-0 w-[88px] h-[88px] border-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                    style={{ borderColor: step.color }}
                  >
                    {/* Hover fill */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: step.color }}
                    />
                    <Icon
                      size={26}
                      className="relative z-10 transition-colors duration-300"
                      style={{ color: step.color }}
                    />
                    {/* Number badge */}
                    <span
                      className="absolute -top-3 -right-3 font-display text-[11px] w-6 h-6 flex items-center justify-center leading-none"
                      style={{ backgroundColor: step.color, color: '#151515' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Text block */}
                  <div className="lg:mt-5 flex-1 lg:flex-none">
                    <h3
                      className="font-display text-[#151515] mb-2.5 leading-none"
                      style={{ fontSize: 'clamp(17px, 1.8vw, 22px)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="font-body text-[#151515]/58 text-[13.5px] sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Desktop arrow connector (between steps) */}
                  {i < steps.length - 1 && (
                    <span
                      className="hidden lg:flex absolute top-[44px] -translate-y-1/2 z-20 text-[#151515]/30 text-base leading-none select-none"
                      style={{ right: '-14px' }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── CTA footer ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.65 }}
          className="mt-14 pt-8 border-t border-[#151515]/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <p className="font-body text-[#151515]/55 text-sm leading-relaxed max-w-md">
            Ready to start? Tell us about your project and we'll outline a process
            tailored to your specific scope.
          </p>
          <button
            onClick={() =>
              document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group flex-shrink-0 flex items-center gap-2 bg-[#151515] text-gold-metallic font-body font-extrabold text-xs tracking-widest uppercase px-7 py-4 border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer shadow-md"
            id="process-start-btn"
          >
            START YOUR PROJECT
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
