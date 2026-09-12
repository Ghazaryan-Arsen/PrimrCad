import React from 'react';
import { Briefcase, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { STUDENT_OUTCOMES } from '../data/landingData';

interface StudentOutcomesProps {
  onOpenRegistration: () => void;
}

export const StudentOutcomesSection: React.FC<StudentOutcomesProps> = ({ onOpenRegistration }) => {
  // Streamlined 4 outcomes
  const outcomes = STUDENT_OUTCOMES.slice(0, 4);

  return (
    <section className="py-10 sm:py-16 bg-white border-y border-gray-200 text-prime-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-prime-navy/10 border border-prime-navy/20 text-prime-navy text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-prime-navy" />
            <span>Կարիերայի Հնարավորություններ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-prime-dark tracking-tight mb-2 sm:mb-3">
            Ինչ կարող եք անել դասընթացն ավարտելուց հետո
          </h2>
          <p className="text-xs sm:text-base text-gray-600">
            Գիտելիքներ, որոնք թույլ են տալիս աշխատել արտադրամասերի հետ կամ որպես freelance CAD modeller։
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {outcomes.map((item) => (
            <div
              key={item.id}
              className="bg-prime-warm-white border border-gray-200/80 hover:border-prime-navy/30 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-prime-navy text-prime-gold flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-prime-dark mb-1.5 group-hover:text-prime-navy transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Career Notice Card */}
        <div className="bg-prime-warm-white border border-gray-200 rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-gray-600">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <div className="flex-1">
            <span className="font-bold text-prime-dark block mb-0.5">
              Մասնագիտական Զարգացում և Իրական Հնարավորություններ
            </span>
            <span>
              PrimeCAD-ը սովորեցնում է իրական արտադրական skills և workflow։ Մենք չենք տալիս անհիմն խոստումներ, այլ ապահովում ենք բարձրորակ կրթություն։
            </span>
          </div>
          <button
            onClick={onOpenRegistration}
            className="text-prime-navy font-bold underline hover:text-amber-700 flex-shrink-0"
          >
            Գրանցվել
          </button>
        </div>

      </div>
    </section>
  );
};
