import { motion } from 'framer-motion';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon as Instagram } from './icons';

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Instagram', href: 'https://www.instagram.com/modernarchitect68/' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#151515] overflow-hidden" role="contentinfo">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div
                className="font-display text-gold-metallic leading-none"
                style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}
              >
                MODERNARCHITECT
              </div>
              <div className="section-label text-[#A7A7A2] mt-2">
                Builders. Interiors. Constructions.
              </div>
            </div>
            <p className="font-body text-[#A7A7A2] text-sm leading-relaxed mb-6 max-w-xs">
              Transforming ideas into thoughtfully designed spaces through innovative
              architecture, quality construction and functional interiors.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/modernarchitect68/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-gradient-to-br from-[#E1306C] to-[#F77737] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="tel:+919949556301"
                aria-label="Call us"
                className="w-9 h-9 bg-[#FFD43B] flex items-center justify-center hover:bg-[#F36B38] transition-colors"
              >
                <Phone size={16} className="text-[#151515]" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="section-label text-[#FFD43B] mb-5">NAVIGATION</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-body text-[#A7A7A2] text-sm hover:text-[#F5F0E7] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-4 h-px bg-[#F5F0E7]/0 group-hover:bg-[#FFD43B] transition-all duration-300" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="section-label text-gold-metallic mb-5">CONTACT</h3>
            <div className="space-y-4">
              <a
                href="tel:+919949556301"
                className="flex items-start gap-3 text-[#A7A7A2] hover:text-[#F5F0E7] transition-colors group"
              >
                <Phone size={14} className="mt-0.5 flex-shrink-0 group-hover:text-[#D4AF37] transition-colors" />
                <span className="font-body text-sm">+91 99495 56301</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=DNO+19-49+Thanapachitey+Street+Mittoor+Chittoor+Andhra+Pradesh+517001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#A7A7A2] hover:text-[#F5F0E7] transition-colors group"
              >
                <MapPin size={14} className="mt-0.5 flex-shrink-0 group-hover:text-[#FFD43B] transition-colors" />
                <span className="font-body text-sm leading-relaxed">
                  DNO 19-49, Thanapachitey Street,
                  <br />Mittoor, Chittoor, AP 517001
                </span>
              </a>
              <a
                href="https://www.instagram.com/modernarchitect68/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#A7A7A2] hover:text-[#F5F0E7] transition-colors group"
              >
                <Instagram size={14} className="mt-0.5 flex-shrink-0 group-hover:text-[#FFD43B] transition-colors" />
                <span className="font-body text-sm">@modernarchitect68</span>
              </a>
            </div>
          </div>
        </div>

        {/* Large wordmark */}
        <div className="border-t border-[#F5F0E7]/10 py-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-[#F5F0E7]/5 select-none text-center leading-none"
            style={{ fontSize: 'clamp(40px, 10vw, 120px)' }}
            aria-hidden="true"
          >
            MODERNARCHITECT
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F5F0E7]/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-body text-[#A7A7A2] text-xs tracking-wider">
              DESIGNED WITH VISION. BUILT WITH PURPOSE.
            </p>
            <p className="font-body text-[#A7A7A2]/50 text-xs mt-1">
              © {new Date().getFullYear()} Modernarchitect Builders & Interiors | Constructions
            </p>
          </div>
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            aria-label="Back to top"
            className="group flex items-center gap-2 text-[#A7A7A2] hover:text-gold-metallic transition-colors duration-300 font-body font-bold text-xs tracking-widest uppercase"
          >
            BACK TO TOP
            <div className="w-8 h-8 border border-[#F5F0E7]/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
