import React from 'react';
import { Briefcase, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { STUDENT_OUTCOMES } from '../data/landingData';

interface StudentOutcomesProps {
  onOpenRegistration: () => void;
}

export const StudentOutcomesSection: React.FC<StudentOutcomesProps> = ({ onOpenRegistration }) => {
  return (
    <section className="py-20 bg-prime-navy/40 border-y border-prime-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime-dark border border-prime-gold/30 text-prime-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-prime-gold" />
            <span>Կարիերայի Հնարավորություններ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ինչ կարող եք անել դասընթացն ավարտելուց հետո
          </h2>
          <p className="text-base sm:text-lg text-prime-muted">
            Գիտելիքներ, որոնք թույլ են տալիս աշխատել տեղական արտադրամասերի, ոսկերչական բրենդների հետ կամ որպես freelance CAD modeller։
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {STUDENT_OUTCOMES.map((item) => (
            <div
              key={item.id}
              className="bg-prime-card border border-prime-border hover:border-prime-gold/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-prime-navy border border-prime-gold/20 flex items-center justify-center text-prime-gold group-hover:bg-prime-gold group-hover:text-prime-dark transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-prime-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-prime-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Career Notice Card */}
        <div className="bg-prime-dark/80 border border-prime-border rounded-2xl p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-prime-muted">
          <ShieldAlert className="w-6 h-6 text-prime-gold flex-shrink-0" />
          <div className="flex-1">
            <span className="font-semibold text-white block mb-0.5">
              Մասնագիտական Զարգացում և Իրական Հնարավորություններ
            </span>
            <span>
              PrimeCAD-ը սովորեցնում է իրական արտադրական skills և workflow։ Մենք չենք տալիս անհիմն «երաշխավորված եկամուտների» խոստումներ, այլ ապահովում ենք բարձրորակ կրթություն, որով դուք ինքնուրույն կարող եք կառուցել ձեր կարիերան։
            </span>
          </div>
          <button
            onClick={onOpenRegistration}
            className="text-prime-gold font-semibold underline hover:text-prime-gold-hover flex-shrink-0"
          >
            Գրանցվել
          </button>
        </div>

      </div>
    </section>
  );
};
