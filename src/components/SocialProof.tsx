import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon as Instagram } from './icons';

// Gallery items — first image is featured (spans 2 rows on desktop)
const galleryItems = [
  { src: '/images/elevation-residence-27.jpg',   alt: 'Residence No.27 four-storey modern elevation with curved balcony frame', featured: true },
  { src: '/images/elevation-a68-villa.jpg',      alt: 'Villa A-68 elevation with dark granite, wood slats and glass balcony', featured: false },
  { src: '/images/interior-master-bedroom.jpg',  alt: 'Master bedroom interior with tropical relief wall and teal bed', featured: false },
  { src: '/images/elevation-curved-villa.jpg',   alt: 'Curved-balcony villa with jali panel and marble feature wall', featured: false },
  { src: '/images/plan-third-floor-27x54.jpg',   alt: 'Third floor 2D plan with master bedroom, living, kitchen and lift', featured: false },
];

export default function SocialProof() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="social-proof"
      ref={sectionRef}
      className="relative bg-[#151515] overflow-hidden"
      aria-label="Social proof and Instagram community"
    >
      {/* Background grid */}
      <div className="absolute inset-0 arch-grid opacity-25 pointer-events-none" />

      {/* Left accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#D4AF37] via-[#FFF099] to-[#D4AF37] origin-top"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col">

            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-7 h-px bg-[#D4AF37] flex-shrink-0" />
              <span className="section-label text-gold-metallic tracking-[0.28em]">INSTAGRAM COMMUNITY</span>
            </motion.div>

            {/* Big counter — sized to impress but not overflow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.85 }}
              className="mb-2 leading-none"
            >
              <span
                className="font-display text-gold-shimmer"
                style={{ fontSize: 'clamp(2.8rem, 12vw, 6rem)', lineHeight: 1.05 }}
              >
                100k+
              </span>
            </motion.div>

            {/* Sub-headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-[#F5F0E7] mb-6"
              style={{ fontSize: 'clamp(1.25rem, 5.5vw, 3rem)', lineHeight: 1.15, overflowWrap: 'anywhere' }}
            >
              INSTAGRAM FOLLOWERS.
              <br />
              <span className="text-[#F36B38]">ONE SHARED</span>
              <br />
              VISION.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.44, duration: 0.75 }}
              className="font-body text-[#A7A7A2] leading-relaxed mb-7 max-w-md"
              style={{ fontSize: 'clamp(13.5px, 1.3vw, 16px)' }}
            >
              Join a growing community discovering architectural ideas, home designs,
              3D elevations and smarter ways to build.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.56, duration: 0.75 }}
              className="flex items-start gap-5 sm:gap-8 mb-7 pb-7 border-b border-[#F5F0E7]/10"
            >
              <div className="flex flex-col gap-1">
                <span className="font-display text-gold-metallic text-2xl sm:text-3xl leading-none">100k+</span>
                <span className="section-label text-[#A7A7A2] leading-snug">INSTAGRAM FOLLOWERS</span>
              </div>
              <div className="w-px self-stretch bg-[#F5F0E7]/12" />
              <div className="flex flex-col gap-1">
                <span className="font-display text-gold-metallic text-2xl sm:text-3xl leading-none">15+</span>
                <span className="section-label text-[#A7A7A2] leading-snug">YEARS EXPERIENCE</span>
              </div>
            </motion.div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col items-start gap-3"
            >
              <a
                href="https://www.instagram.com/modernarchitect68/"
                target="_blank"
                rel="noopener noreferrer"
                id="instagram-follow-btn"
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#E1306C] to-[#F77737] text-white font-body font-bold text-[12px] tracking-[0.1em] uppercase px-6 py-3.5 hover:opacity-90 transition-all duration-300"
              >
                <Instagram size={14} className="flex-shrink-0" />
                FOLLOW OUR WORK
                <ArrowUpRight
                  size={14}
                  className="flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <span className="section-label text-[#A7A7A2]">@modernarchitect68</span>
            </motion.div>
          </div>

          {/* ── Right: Image collage ── */}
          {/*
            Layout (desktop):
              Col 1 (wide): featured image spans both rows
              Col 2 + 3 (equal): 4 smaller images in a 2×2 grid
            On mobile/tablet (<lg): images stack as a uniform 2-col grid
          */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="w-full"
          >
            {/* Mobile / tablet: simple 2-col uniform grid */}
            <div className="grid grid-cols-2 gap-2.5 lg:hidden">
              {galleryItems.map((item, i) => (
                <motion.a
                  key={i}
                  href="https://www.instagram.com/modernarchitect68/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                  className="group relative overflow-hidden aspect-square block"
                  aria-label={item.alt}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#151515]/0 group-hover:bg-[#151515]/45 transition-all duration-500 flex items-center justify-center">
                    <Instagram size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Desktop: asymmetric 3-col collage with featured image */}
            <div
              className="hidden lg:grid gap-2.5"
              style={{ gridTemplateColumns: '1.55fr 1fr 1fr', gridTemplateRows: 'repeat(2, 1fr)', height: '480px' }}
            >
              {/* Featured: col 1, rows 1-2 */}
              <motion.a
                href="https://www.instagram.com/modernarchitect68/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="group relative overflow-hidden block"
                style={{ gridColumn: '1', gridRow: '1 / 3' }}
                aria-label={galleryItems[0].alt}
              >
                <img
                  src={galleryItems[0].src}
                  alt={galleryItems[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#151515]/0 group-hover:bg-[#151515]/40 transition-all duration-500 flex items-center justify-center">
                  <Instagram size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
              </motion.a>

              {/* Remaining 4 images: cols 2-3, rows 1-2 */}
              {galleryItems.slice(1).map((item, i) => (
                <motion.a
                  key={i + 1}
                  href="https://www.instagram.com/modernarchitect68/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.7 }}
                  className="group relative overflow-hidden block"
                  aria-label={item.alt}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#151515]/0 group-hover:bg-[#151515]/40 transition-all duration-500 flex items-center justify-center">
                    <Instagram size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
