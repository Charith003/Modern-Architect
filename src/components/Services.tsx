import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, LayoutTemplate, Box, Building2, Sofa, Compass, Grid2X2 } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: LayoutTemplate,
    title: '2D FLOOR PLANS',
    description:
      'Functional layouts designed around your lifestyle, space requirements and everyday needs. Every room considered, every corridor purposeful.',
    highlight: 'SPACE · FUNCTION · FLOW',
    bg: '#151515',
    accent: '#D4AF37',
    image: '/images/floorplan.jpg',
  },
  {
    number: '02',
    icon: Box,
    title: '3D ELEVATIONS',
    description:
      'Bring your future home to life through realistic exterior concepts, materials and architectural detailing. See it before you build it.',
    highlight: 'CONCEPT · MATERIAL · DETAIL',
    bg: '#2563EB',
    accent: '#D4AF37',
    image: '/images/elevation1.jpg',
  },
  {
    number: '03',
    icon: Building2,
    title: 'RESIDENTIAL CONSTRUCTION',
    description:
      'From planning to execution, build with a focus on workmanship, quality and thoughtful coordination. Your home, built right.',
    highlight: 'PLAN · EXECUTE · DELIVER',
    bg: '#F5F0E7',
    accent: '#F36B38',
    image: '/images/hero.jpg',
  },
  {
    number: '04',
    icon: Sofa,
    title: 'INTERIOR DESIGN',
    description:
      'Create inviting interiors that balance aesthetics, functionality and comfort — from living rooms and kitchens to bedrooms and bathrooms.',
    highlight: 'AESTHETIC · FUNCTION · COMFORT',
    bg: '#151515',
    accent: '#F36B38',
    image: '/images/interior.jpg',
  },
  {
    number: '05',
    icon: Compass,
    title: 'VASTU-BASED PLANNING',
    description:
      'Explore layout options that incorporate your spatial preferences and Vastu considerations — thoughtfully integrated into modern design.',
    highlight: 'ORIENTATION · HARMONY · BALANCE',
    bg: '#F36B38',
    accent: '#D4AF37',
    image: null,
  },
  {
    number: '06',
    icon: Grid2X2,
    title: 'SPACE PLANNING & DESIGN',
    description:
      'Make every square foot count through considered layouts and practical design solutions that adapt to the way you live.',
    highlight: 'OPTIMIZE · ADAPT · INHABIT',
    bg: '#1A1A2E',
    accent: '#2563EB',
    image: '/images/kitchen.jpg',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const handleEnquiry = (serviceName: string) => {
    const el = document.querySelector('#enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const select = document.querySelector<HTMLSelectElement>('#service-select');
        if (select) {
          const opt = Array.from(select.options).find((o) =>
            o.text.toLowerCase().includes(serviceName.toLowerCase().split(' ')[0])
          );
          if (opt) {
            select.value = opt.value;
            select.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      }, 800);
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#151515] py-16 md:py-24 overflow-hidden"
      aria-label="Our services"
    >
      {/* Background grid */}
      <div className="absolute inset-0 arch-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-7 h-px bg-[#2563EB] flex-shrink-0" />
            <span className="section-label text-[#2563EB] tracking-[0.28em]">SIGNATURE SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.85 }}
            className="font-display text-[#F5F0E7]"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.25rem)', lineHeight: 0.94 }}
          >
            EVERY DETAIL.
            <br />
            <span className="text-gold-shimmer">THOUGHTFULLY</span>
            <br />
            DESIGNED.
          </motion.h2>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            // Determine legible text colours based on card background
            const isLight = service.bg === '#F5F0E7';
            const isOrange = service.bg === '#F36B38';
            const textPrimary = isLight ? '#151515' : '#F5F0E7';
            // On orange bg, use white for body text (not semi-transparent which can look muddy)
            const textBody = isLight
              ? 'rgba(21,21,21,0.65)'
              : isOrange
              ? 'rgba(255,255,255,0.85)'
              : '#A7A7A2';

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.6 }}
                className="group relative overflow-hidden"
                style={{ backgroundColor: service.bg }}
              >
                {/* Background image layer */}
                {service.image && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-25 transition-all duration-700"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        transform: 'scale(1.05)',
                      }}
                    />
                    {/* Consistent scrim so image never bleeds through text */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(145deg, ${service.bg}F2 0%, ${service.bg}CC 60%, ${service.bg}99 100%)`,
                      }}
                    />
                  </>
                )}

                {/* Card content */}
                <div className="relative z-10 p-6 sm:p-7 flex flex-col min-h-[300px]">

                  {/* Number + icon row */}
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className="font-display text-5xl leading-none select-none"
                      style={{ color: service.accent, opacity: 0.28 }}
                    >
                      {service.number}
                    </span>
                    <div
                      className="w-9 h-9 flex items-center justify-center border flex-shrink-0"
                      style={{ borderColor: `${service.accent}40` }}
                    >
                      <Icon size={18} style={{ color: service.accent }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display mb-3 leading-[1.05]"
                    style={{
                      fontSize: 'clamp(16px, 1.8vw, 21px)',
                      color: textPrimary,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-body text-[13.5px] leading-relaxed flex-1 mb-5"
                    style={{ color: textBody }}
                  >
                    {service.description}
                  </p>

                  {/* Bottom row: highlight tag + enquire button */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t" style={{ borderColor: `${service.accent}20` }}>
                    <span
                      className="font-body font-bold text-[9.5px] tracking-[0.18em] uppercase leading-none"
                      style={{ color: service.accent }}
                    >
                      {service.highlight}
                    </span>
                    <button
                      onClick={() => handleEnquiry(service.title)}
                      className="group/btn flex-shrink-0 flex items-center gap-1 font-body font-bold text-[11px] tracking-wider uppercase transition-all duration-300 cursor-pointer"
                      style={{ color: service.accent }}
                      aria-label={`Enquire about ${service.title}`}
                    >
                      ENQUIRE
                      <ArrowUpRight
                        size={12}
                        className="flex-shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </button>
                  </div>
                </div>

                {/* Hover accent bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: service.accent }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
