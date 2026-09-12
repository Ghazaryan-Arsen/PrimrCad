import React, { useState } from 'react';
import { Phone, MessageSquare, Instagram, MapPin, Shield, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';
import { trackEvent } from '../utils/analytics';

export const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-prime-dark border-t border-prime-border/80 pt-16 pb-24 sm:pb-16 text-prime-muted relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-prime-border/60">

          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-prime-navy border border-prime-gold/40 flex items-center justify-center group-hover:border-prime-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                  <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="#FDE197" strokeWidth="6" strokeLinejoin="round" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#FDE197" strokeWidth="3" strokeOpacity="0.5" />
                  <line x1="10" y1="30" x2="90" y2="70" stroke="#FDE197" strokeWidth="3" strokeOpacity="0.5" />
                  <circle cx="50" cy="50" r="10" fill="#FDE197" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Prime<span className="text-prime-gold">CAD</span>
              </span>
            </a>

            <p className="text-sm text-prime-muted leading-relaxed mb-6 max-w-sm">
              PrimeCAD-ը զարդերի եռաչափ մոդելավորման մասնագիտական դպրոց է։ Ուսուցում 0-ից՝ իրական jewelry production workflow-ով։
            </p>

            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('instagram_click', { location: 'footer' })}
                className="p-2.5 rounded-xl bg-prime-navy border border-prime-border hover:border-prime-gold text-prime-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackEvent('phone_click', { location: 'footer' })}
                className="p-2.5 rounded-xl bg-prime-navy border border-prime-border hover:border-prime-gold text-prime-gold transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { location: 'footer' })}
                className="p-2.5 rounded-xl bg-prime-navy border border-prime-border hover:border-emerald-500 text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Նավիգացիա
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#course-details" className="hover:text-prime-gold transition-colors">
                  Դասընթացի Մասին
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-prime-gold transition-colors">
                  Ուսումնական Ծրագիր
                </a>
              </li>
              <li>
                <a href="#instructor" className="hover:text-prime-gold transition-colors">
                  Դասավանդող (Andranik)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-prime-gold transition-colors">
                  Աշխատանքներ
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-prime-gold transition-colors">
                  Հաճախ Տրվող Հարցեր (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Կոնտակտներ
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={() => trackEvent('phone_click', { location: 'footer_contact' })}
                className="flex items-center gap-3 text-white hover:text-prime-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-prime-gold" />
                <span>{CONTACT_INFO.formattedPhone}</span>
              </a>

              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { location: 'footer_contact' })}
                className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {CONTACT_INFO.formattedPhone}</span>
              </a>

              <div className="flex items-start gap-3 text-prime-muted">
                <MapPin className="w-4 h-4 text-prime-gold flex-shrink-0 mt-1" />
                <span>Երևան, {CONTACT_INFO.address} (Offline դասընթացներ)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} PrimeCAD. Բոլոր իրավունքները պաշտպանված են։</p>
          <button
            onClick={() => setShowPrivacyModal(true)}
            className="hover:text-prime-gold transition-colors flex items-center gap-1"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Գաղտնիության Քաղաքականություն (Privacy Policy)</span>
          </button>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-prime-card border border-prime-border rounded-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 p-2 text-prime-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="text-lg font-bold text-white mb-4">
              Գաղտնիության Քաղաքականություն (Privacy Policy)
            </h4>
            <p className="text-xs text-prime-muted leading-relaxed mb-4">
              PrimeCAD-ը հարգում է ձեր տվյալների գաղտնիությունը։ Գրանցման ձևանմուշի միջոցով տրամադրված ձեր անունը, հեռախոսահամարը և էլ. հասցեն օգտագործվում են բացառապես PrimeCAD դասընթացների վերաբերյալ ձեզ հետ կապ հաստատելու և տեղեկատվություն տրամադրելու նպատակով։
            </p>
            <p className="text-xs text-prime-muted leading-relaxed mb-6">
              Ձեր տվյալները չեն փոխանցվում երրորդ անձանց և չեն օգտագործվում անցանկալի գովազդների (spam) համար։
            </p>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full bg-prime-gold text-prime-dark font-bold text-xs py-2.5 rounded-xl shadow-gold-glow"
            >
              Հասկանալի է
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
