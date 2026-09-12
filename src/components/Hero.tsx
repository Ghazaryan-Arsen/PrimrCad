import React from 'react';
import { ArrowRight, Phone, CheckCircle2, Award, Users, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onOpenRegistration: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegistration }) => {
  const handlePrimaryCta = () => {
    trackEvent('registration_cta_click', { location: 'hero' });
    onOpenRegistration();
  };

  const handlePhoneCta = () => {
    trackEvent('phone_click', { location: 'hero' });
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-prime-dark via-prime-navy/40 to-prime-dark">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-prime-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col text-left">

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-prime-navy border border-prime-gold/30 w-fit mb-6 shadow-sm">
              <Award className="w-4 h-4 text-prime-gold" />
              <span className="text-xs font-semibold text-prime-gold tracking-wide uppercase">
                Authorized Rhino Trainer · 20+ Տարվա Փորձ
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-6">
              Սովորիր պրոֆեսիոնալ{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-prime-gold via-prime-gold-hover to-amber-200">
                Jewelry CAD Modeling
              </span>{' '}
              և ձեռք բեր մասնագիտություն, որով կարող ես աշխատել նաև միջազգային շուկայում
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-prime-muted mb-8 max-w-2xl font-normal leading-relaxed">
              Ուսուցում <span className="text-white font-medium">զրոյից</span>՝ իրական jewelry production workflow-ով։
              3 ամսում տիրապետիր Rhino, Matrix 9, ZBrush, Magics ծրագրերին
              <span className="text-white font-medium"> 2–4 հոգանոց փոքր խմբերում</span>։
            </p>

            {/* Trust Highlights List */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-prime-gold flex-shrink-0" />
                <span>Զրոյից մինչև Production-Ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-prime-gold flex-shrink-0" />
                <span>2–4 հոգանոց խմբեր (Small Group)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-prime-gold flex-shrink-0" />
                <span>Online / Offline (Քաջազնունի 1)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-prime-gold flex-shrink-0" />
                <span>STL & Freelance Preparation</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handlePrimaryCta}
                className="bg-prime-gold text-prime-dark font-bold text-base px-8 py-4 rounded-xl hover:bg-prime-gold-hover transition-all duration-200 shadow-gold-glow-lg flex items-center justify-center gap-3 group active:scale-95"
              >
                <span>Գրանցվել դասընթացին</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                onClick={handlePhoneCta}
                className="bg-prime-navy/80 hover:bg-prime-navy text-white font-semibold text-base px-6 py-4 rounded-xl border border-prime-border transition-all duration-200 flex items-center justify-center gap-2 hover:border-prime-gold/40"
              >
                <Phone className="w-4 h-4 text-prime-gold" />
                <span>Զանգահարել ({CONTACT_INFO.formattedPhone})</span>
              </a>
            </div>

            {/* Pricing note */}
            <div className="mt-4 flex items-center gap-3 text-xs text-prime-muted">
              <span className="font-semibold text-white">{CONTACT_INFO.pricePerMonth}</span>
              <span className="w-1 h-1 bg-prime-muted/40 rounded-full" />
              <span>{CONTACT_INFO.totalPrice}</span>
            </div>

          </div>

          {/* Hero Right Visual Element */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-prime-gold/30 to-blue-500/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative bg-prime-card border border-prime-border/80 rounded-2xl p-6 shadow-2xl overflow-hidden">

                {/* Purely Decorative CAD Viewport */}
                <div className="relative aspect-square w-full rounded-xl bg-prime-dark/90 border border-prime-border/50 flex flex-col justify-between p-4 overflow-hidden">

                  <div className="flex items-center justify-between text-[11px] text-prime-muted border-b border-prime-border/40 pb-2">
                    <span className="flex items-center gap-1.5 font-mono text-prime-gold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Rhino / Matrix 9 Viewport
                    </span>
                    <span className="font-mono text-xs">PERSPECTIVE</span>
                  </div>

                  <div className="my-auto flex flex-col items-center justify-center py-4 relative">
                    <svg className="w-48 h-48 sm:w-56 sm:h-56 drop-shadow-[0_0_15px_rgba(253,225,151,0.25)]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="85" stroke="#212A58" strokeWidth="1" strokeDasharray="4 4" />
                      <circle cx="100" cy="100" r="60" stroke="#212A58" strokeWidth="1" strokeDasharray="4 4" />

                      <ellipse cx="100" cy="125" rx="55" ry="32" stroke="#FDE197" strokeWidth="5" strokeOpacity="0.9" fill="none" />
                      <ellipse cx="100" cy="120" rx="50" ry="28" stroke="#8E99B7" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

                      <path d="M75 105 L82 70 L100 65 L118 70 L125 105" stroke="#FDE197" strokeWidth="3" strokeLinejoin="round" />
                      <line x1="82" y1="70" x2="118" y2="70" stroke="#FDE197" strokeWidth="2" />

                      <polygon points="100,35 125,60 100,72 75,60" fill="#FDE197" fillOpacity="0.2" stroke="#FDE197" strokeWidth="2" />
                      <polygon points="100,35 112,60 100,72 88,60" fill="#FFFFFF" fillOpacity="0.3" stroke="#FDE197" strokeWidth="1.5" />

                      <circle cx="70" cy="98" r="4" fill="#FDE197" />
                      <circle cx="130" cy="98" r="4" fill="#FDE197" />
                      <circle cx="60" cy="108" r="3" fill="#FDE197" />
                      <circle cx="140" cy="108" r="3" fill="#FDE197" />
                    </svg>

                    <div className="absolute bottom-1 right-2 text-[10px] font-mono text-prime-muted bg-prime-navy/80 px-2 py-0.5 rounded border border-prime-border">
                      3D Mesh Model
                    </div>
                  </div>

                  <div className="pt-2 border-t border-prime-border/40 text-[10px] font-mono text-prime-muted text-center">
                    Clean Mesh STL · Production Ready
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-prime-navy/60 p-3 rounded-xl border border-prime-border/60 flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-prime-gold flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">2–4 Հոգի</span>
                      <span className="text-[10px] text-prime-muted">Փոքր անհատական խումբ</span>
                    </div>
                  </div>

                  <div className="bg-prime-navy/60 p-3 rounded-xl border border-prime-border/60 flex items-center gap-2.5">
                    <Calendar className="w-5 h-5 text-prime-gold flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">3 Ամիս</span>
                      <span className="text-[10px] text-prime-muted">Շաբաթական 3 անգամ</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
