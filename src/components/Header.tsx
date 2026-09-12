import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, ArrowRight, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';
import { trackEvent } from '../utils/analytics';

interface HeaderProps {
  onOpenRegistration: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegistration }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Դասընթաց', href: '#course-details' },
    { name: 'Ինչ կսովորեք', href: '#curriculum' },
    { name: 'Դասավանդող', href: '#instructor' },
    { name: 'Աշխատանքներ', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    trackEvent('registration_cta_click', { location: 'header' });
    onOpenRegistration();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-prime-dark/90 backdrop-blur-md border-b border-prime-border/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-prime-gold rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-prime-navy border border-prime-gold/40 flex items-center justify-center group-hover:border-prime-gold transition-colors shadow-gold-glow">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="#FDE197" strokeWidth="6" strokeLinejoin="round" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="#FDE197" strokeWidth="3" strokeOpacity="0.5" />
                <line x1="10" y1="30" x2="90" y2="70" stroke="#FDE197" strokeWidth="3" strokeOpacity="0.5" />
                <circle cx="50" cy="50" r="10" fill="#FDE197" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1">
                Prime<span className="text-prime-gold">CAD</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-prime-muted -mt-1 font-semibold">
                Jewelry Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-prime-muted hover:text-white transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-prime-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('instagram_click', { location: 'header' })}
              aria-label="PrimeCAD Instagram"
              className="p-2 rounded-lg text-prime-muted hover:text-prime-gold hover:bg-prime-navy/60 transition-colors border border-transparent hover:border-prime-border"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <button
              onClick={handleCtaClick}
              className="bg-prime-gold text-prime-dark font-semibold px-5 py-2.5 rounded-xl hover:bg-prime-gold-hover transition-all duration-200 shadow-gold-glow flex items-center gap-2 group text-sm active:scale-95"
            >
              <span>Գրանցվել</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={handleCtaClick}
              className="bg-prime-gold text-prime-dark font-bold text-xs px-3 py-2 rounded-lg"
            >
              Գրանցվել
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-prime-muted hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-prime-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-prime-navy/95 backdrop-blur-xl border-b border-prime-border px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-prime-light hover:text-prime-gold py-2 border-b border-prime-border/40"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full bg-prime-gold text-prime-dark font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-base shadow-gold-glow"
            >
              <span>Գրանցվել դասընթացին</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-around pt-2">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackEvent('phone_click', { location: 'mobile_drawer' })}
                className="flex items-center gap-2 text-sm text-prime-muted hover:text-white"
              >
                <Phone className="w-4 h-4 text-prime-gold" />
                <span>{CONTACT_INFO.formattedPhone}</span>
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('instagram_click', { location: 'mobile_drawer' })}
                className="flex items-center gap-2 text-sm text-prime-muted hover:text-prime-gold"
              >
                <Instagram className="w-4 h-4 text-prime-gold" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
