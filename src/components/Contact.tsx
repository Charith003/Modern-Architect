import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { InstagramIcon as Instagram } from './icons';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=DNO+19-49+Thanapachitey+Street+Mittoor+Chittoor+Andhra+Pradesh+517001`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#151515] py-20 md:py-28 overflow-hidden"
      aria-label="Contact details"
    >
      <div className="absolute inset-0 arch-grid opacity-30" />

      {/* Top yellow bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-1 bg-[#FFD43B] origin-left"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-8 h-px bg-[#FFD43B]" />
          <span className="section-label text-[#FFD43B] tracking-[0.3em]">GET IN TOUCH</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Headline + details */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="font-display text-[#F5F0E7] leading-none mb-12"
              style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 0.92 }}
            >
              YOUR NEXT
              <br />
              PROJECT
              <br />
              <span className="text-[#FFD43B]">STARTS HERE.</span>
            </motion.h2>

            {/* Contact cards */}
            <div className="space-y-0">
              {/* Phone */}
              <motion.a
                href="tel:+919949556301"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="group flex items-start gap-5 p-5 border-t border-[#F5F0E7]/10 hover:bg-[#F5F0E7]/5 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-[#FFD43B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F36B38] transition-colors duration-300">
                  <Phone size={18} className="text-[#151515]" />
                </div>
                <div>
                  <div className="section-label text-[#A7A7A2] mb-1">PHONE / WHATSAPP</div>
                  <div className="font-display text-[#F5F0E7] group-hover:text-[#FFD43B] transition-colors text-xl">
                    +91 99495 56301
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="group flex items-start gap-5 p-5 border-t border-[#F5F0E7]/10 hover:bg-[#F5F0E7]/5 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-[#2563EB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F36B38] transition-colors duration-300">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="section-label text-[#A7A7A2] mb-1">LOCATION</div>
                  <div className="font-body text-[#F5F0E7] group-hover:text-[#FFD43B] transition-colors text-sm leading-relaxed font-semibold">
                    DNO 19-49, Thanapachitey Street,
                    <br />Mittoor, Chittoor, Andhra Pradesh 517001
                  </div>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/modernarchitect68/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="group flex items-start gap-5 p-5 border-t border-b border-[#F5F0E7]/10 hover:bg-[#F5F0E7]/5 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#E1306C] to-[#F77737] flex items-center justify-center flex-shrink-0">
                  <Instagram size={18} className="text-white" />
                </div>
                <div>
                  <div className="section-label text-[#A7A7A2] mb-1">INSTAGRAM</div>
                  <div className="font-body text-[#F5F0E7] group-hover:text-gold-metallic transition-colors font-semibold">
                    @modernarchitect68
                    <span className="ml-2 text-xs text-[#A7A7A2] font-normal">75+k INSTAGRAM FOLLOWERS</span>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right: Action panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="bg-[#F5F0E7] p-8 md:p-10 flex flex-col"
          >
            <div className="mb-8">
              <div className="font-display text-[#151515] mb-1" style={{ fontSize: 'clamp(14px, 2vw, 18px)', lineHeight: 1.2 }}>
                MODERNARCHITECT BUILDERS &amp; INTERIORS
              </div>
              <div className="section-label text-[#F36B38] mt-1">CONSTRUCTIONS</div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-[#151515]/15">
              <div>
                <div className="font-display text-[#F36B38] text-4xl">15+</div>
                <div className="section-label text-[#151515]/60 mt-1">YEARS EXPERIENCE</div>
              </div>
              <div>
                <div className="font-display text-gold-metallic text-4xl">75+k</div>
                <div className="section-label text-[#151515]/60 mt-1">INSTAGRAM FOLLOWERS</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="tel:+919949556301"
                id="contact-call-btn"
                className="group flex items-center justify-center gap-3 bg-gold-metallic font-body font-bold text-sm tracking-widest uppercase py-4 shadow-lg transition-all duration-300"
              >
                <Phone size={16} />
                CALL NOW
              </a>
              <a
                href="https://wa.me/919949556301"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="group flex items-center justify-center gap-3 bg-[#25D366] text-white font-body font-bold text-sm tracking-widest uppercase py-4 hover:bg-[#1da851] transition-all duration-300"
              >
                CHAT ON WHATSAPP
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-directions-btn"
                className="group flex items-center justify-center gap-3 border-2 border-[#151515] text-[#151515] font-body font-bold text-sm tracking-widest uppercase py-4 hover:bg-[#151515] hover:text-[#FFD43B] transition-all duration-300"
              >
                <ExternalLink size={15} />
                GET DIRECTIONS
              </a>
            </div>

            <p className="font-body text-[#151515]/50 text-xs leading-relaxed">
              Based in Chittoor, Andhra Pradesh, serving clients across AP and Telangana.
              15+ years of architecture, construction and interior design experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
