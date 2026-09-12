import React from 'react';
import { Award, Users, Calendar, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';

export const TrustBar: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      value: '20+ Տարի',
      label: 'Դասավանդման փորձ',
      detail: CONTACT_INFO.instructorTitle,
    },
    {
      icon: ShieldCheck,
      value: '100% Practical',
      label: 'Production Workflow',
      detail: 'Real jewelry manufacturing standard',
    },
    {
      icon: Users,
      value: '2–4 Հոգի',
      label: 'Խմբային չափս',
      detail: 'Առավելագույն ուշադրություն յուրաքանչյուրին',
    },
    {
      icon: Calendar,
      value: '3 Ամիս',
      label: 'Խորացված ծրագիր',
      detail: 'Online & Offline (Քաջազնունի 1)',
    },
  ];

  return (
    <section className="bg-prime-navy/80 border-y border-prime-border/80 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-3 rounded-xl bg-prime-dark/40 border border-prime-border/40 hover:border-prime-gold/30 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-prime-navy border border-prime-gold/20 text-prime-gold flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-prime-gold">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-prime-muted mt-0.5 line-clamp-1">
                    {item.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
