import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { InstagramIcon as Instagram } from './icons';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-90px 0px -90px 0px' }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#101010]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-2xl py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-[#0c0c0c]/95 via-[#0c0c0c]/70 to-transparent py-4 sm:py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between w-full">
          {/* Official Company Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center group py-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD43B]"
            aria-label="Modern Architect - Planners, Valuers & Builders"
          >
            <img
              src="/images/logo-brand.png"
              alt="Modern Architect - Planners, Valuers & Builders"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-110 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] ${
                scrolled
                  ? 'h-[64px] sm:h-[72px] md:h-[78px] lg:h-[84px]'
                  : 'h-[72px] sm:h-[84px] md:h-[96px] lg:h-[110px] xl:h-[118px]'
              }`}
            />
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-9 xl:gap-12"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`font-body font-semibold text-[13px] lg:text-[15px] xl:text-[16px] tracking-[0.16em] uppercase transition-all duration-300 relative py-2 group ${
                  activeSection === link.href.slice(1)
                    ? 'text-gold-metallic'
                    : 'text-[#F5F0E7]/85 hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#D4AF37] via-[#FFF099] to-[#D4AF37] transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="https://www.instagram.com/modernarchitect68/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5F0E7]/75 hover:text-[#D4AF37] p-2 transition-all duration-300 hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={23} />
            </a>
            <a
              href="tel:+919949556301"
              className="inline-flex items-center gap-2.5 bg-gold-metallic font-body font-extrabold text-xs lg:text-[14px] tracking-wider uppercase px-5 lg:px-7 py-3 lg:py-3.5 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Call us at +91 99495 56301"
            >
              <Phone size={17} className="shrink-0" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#F5F0E7] p-2.5 -mr-2 hover:text-[#FFD43B] transition-colors focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#121212]/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex flex-col h-full px-6 sm:px-8 pt-5 pb-8 overflow-y-auto">
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F5F0E7]/10 mb-8">
                <img
                  src="/images/logo-brand.png"
                  alt="Modern Architect"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F5F0E7] p-2 hover:text-[#FFD43B] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={30} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-5 flex-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`font-display text-left transition-colors duration-300 border-b border-[#F5F0E7]/10 pb-3 flex items-center justify-between ${
                      activeSection === link.href.slice(1)
                        ? 'text-[#FFD43B]'
                        : 'text-[#F5F0E7] hover:text-[#FFD43B]'
                    }`}
                    style={{ fontSize: 'clamp(26px, 7vw, 42px)' }}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono tracking-widest text-[#FFD43B]/60">
                      0{i + 1}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Mobile Action CTAs */}
              <div className="flex flex-col gap-3.5 mt-8 pt-4 border-t border-[#F5F0E7]/10">
                <a
                  href="tel:+919949556301"
                  className="flex items-center justify-center gap-2.5 bg-gold-metallic font-body font-extrabold text-sm tracking-widest uppercase py-4 shadow-xl"
                >
                  <Phone size={18} />
                  <span>CALL +91 99495 56301</span>
                </a>
                <a
                  href="https://wa.me/919949556301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 border border-[#D4AF37]/50 text-gold-metallic font-body font-bold text-sm tracking-widest uppercase py-3.5 hover:bg-[#D4AF37]/10 transition-colors"
                >
                  CHAT ON WHATSAPP
                </a>
                <a
                  href="https://www.instagram.com/modernarchitect68/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[#A7A7A2] font-body font-semibold text-xs tracking-widest uppercase py-2 hover:text-[#D4AF37] transition-colors"
                >
                  <Instagram size={17} />
                  <span>@modernarchitect68</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
