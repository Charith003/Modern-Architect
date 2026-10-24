import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon as Instagram } from './icons';

const galleryImages = [
  { src: '/images/hero.jpg',                     alt: 'Modern two-storey villa elevation with cantilevered balcony and stone feature wall', caption: 'Exterior Design'    },
  { src: '/images/elevation-residence-27.jpg',   alt: 'Residence No.27 four-storey elevation with curved balcony frame',                     caption: '3D Elevation'       },
  { src: '/images/elevation-cream-villa.jpg',    alt: 'Cream villa elevation with LED cove lighting and jali balcony',                       caption: 'Villa Design'       },
  { src: '/images/plan-third-floor-27x54.jpg',   alt: 'Third floor 2D plan with lift, balcony and Namaz room',                               caption: '2D Floor Plan'      },
  { src: '/images/interior-master-bedroom.jpg',  alt: 'Master bedroom with tropical relief wall and teal upholstered bed',                   caption: 'Interior Design'    },
  { src: '/images/villa-aerial.jpg',             alt: 'Aerial view of single-storey villa with landscaped courtyard and parking',            caption: 'Residential Design' },
];

export default function InstagramFeed() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="instagram"
      ref={sectionRef}
      className="relative bg-[#F5F0E7] py-16 md:py-22 overflow-hidden"
      aria-label="Instagram project gallery"
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#151515 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Top layout: heading left | profile card right ── */}
        {/*
          On mobile  : column stack — heading then card
          On desktop : 2-col row — heading | card, aligned to top so card
                       never overlaps the gallery below
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 mb-10 md:mb-12 items-start">

          {/* Heading block */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-7 h-px bg-[#F36B38] flex-shrink-0" />
              <span className="section-label text-[#F36B38] tracking-[0.28em]">INSTAGRAM GALLERY</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18, duration: 0.85 }}
              className="font-display text-[#151515]"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.5rem)', lineHeight: 0.96 }}
            >
              FOLLOW THE PROCESS.
              <br />
              <span className="text-[#F36B38]">SEE THE</span>
              <br />
              POSSIBILITIES.
            </motion.h2>
          </div>

          {/* Instagram profile card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="bg-[#151515] p-6 w-full lg:w-[280px] flex-shrink-0"
          >
            {/* Account header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#E1306C] to-[#F77737] flex items-center justify-center flex-shrink-0">
                <Instagram size={18} className="text-white" />
              </div>
              <div>
                <div className="font-body font-bold text-[#F5F0E7] text-[13px] leading-tight">
                  @modernarchitect68
                </div>
                <div className="section-label text-[#A7A7A2] mt-0.5 tracking-widest">INSTAGRAM</div>
              </div>
            </div>

            {/* Follower count */}
            <div className="mb-1">
              <span className="font-display text-gold-metallic" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
                100k+
              </span>
            </div>
            <div className="section-label text-[#A7A7A2] mb-5 tracking-widest">INSTAGRAM FOLLOWERS</div>

            {/* Follow CTA */}
            <a
              href="https://www.instagram.com/modernarchitect68/"
              target="_blank"
              rel="noopener noreferrer"
              id="instagram-gallery-follow-btn"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#E1306C] to-[#F77737] text-white font-body font-bold text-[11px] tracking-[0.1em] uppercase py-3 hover:opacity-90 transition-opacity w-full mb-3"
            >
              FOLLOW ON INSTAGRAM
              <ArrowUpRight
                size={12}
                className="flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Sub-text */}
            <p className="text-[#A7A7A2] text-[11.5px] font-body leading-relaxed">
              Follow us for daily architectural inspiration, house plans and live project updates.
            </p>
          </motion.div>
        </div>

        {/* ── Gallery grid ── */}
        {/*
          Mobile   (< sm): 1 column
          Tablet   (sm)  : 2 columns
          Desktop  (lg)  : 3 columns
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/modernarchitect68/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.08 + i * 0.07, duration: 0.55 }}
              className="group relative overflow-hidden aspect-[4/3] sm:aspect-square block"
              aria-label={img.alt}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#151515]/0 group-hover:bg-[#151515]/55 transition-all duration-500 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <Instagram size={26} className="text-white" />
                  <span className="font-body font-bold text-white text-[11px] tracking-widest uppercase">
                    {img.caption}
                  </span>
                </div>
              </div>

              {/* Bottom caption strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#151515]/80 py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="section-label text-[#FFD43B] tracking-widest">{img.caption}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.85, duration: 0.65 }}
          className="font-body text-[#151515]/45 text-[11.5px] text-center mt-7 leading-relaxed"
        >
          Architectural inspiration, house plans, elevation concepts and design ideas from our community.
          <br className="hidden sm:block" />
          Images shown are sample project showcases — visit our Instagram for live posts.
        </motion.p>

      </div>
    </section>
  );
}
