import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';
import { trackEvent } from '../utils/analytics';

interface StickyMobileCtaProps {
  onOpenRegistration: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenRegistration }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-prime-navy/95 backdrop-blur-lg border-t border-prime-border p-3 shadow-2xl animate-in slide-in-from-bottom-3 duration-300">
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            trackEvent('registration_cta_click', { location: 'sticky_mobile_bar' });
            onOpenRegistration();
          }}
          className="flex-1 bg-prime-gold text-prime-dark font-bold text-sm py-3 px-4 rounded-xl shadow-gold-glow flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <span>Գրանցվել դասընթացին</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <a
          href={`tel:${CONTACT_INFO.phone}`}
          onClick={() => trackEvent('phone_click', { location: 'sticky_mobile_bar' })}
          aria-label="Զանգահարել PrimeCAD"
          className="p-3 bg-prime-card border border-prime-border rounded-xl text-prime-gold hover:bg-prime-navy active:scale-95 transition-transform flex items-center justify-center"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { location: 'sticky_mobile_bar' })}
          aria-label="Write on WhatsApp"
          className="p-3 bg-emerald-600/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-600/30 active:scale-95 transition-transform flex items-center justify-center"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
