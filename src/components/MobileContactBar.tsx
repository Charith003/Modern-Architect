import { Phone, MessageCircle } from 'lucide-react';

export default function MobileContactBar() {
  return (
    <div className="mobile-contact-bar md:hidden" role="navigation" aria-label="Quick contact actions">
      <a
        href="tel:+919949556301"
        className="flex-1 flex items-center justify-center gap-2 bg-gold-metallic font-body font-extrabold text-xs tracking-widest uppercase py-4 shadow-lg transition-all duration-300"
        aria-label="Call us"
      >
        <Phone size={15} />
        CALL
      </a>
      <a
        href="https://wa.me/919949556301"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-bold text-xs tracking-widest uppercase py-4 hover:bg-[#1da851] transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={15} />
        WHATSAPP
      </a>
    </div>
  );
}
