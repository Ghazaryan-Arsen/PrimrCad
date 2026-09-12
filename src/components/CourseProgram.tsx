import React from 'react';
import { Gem, Factory, Printer, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { COURSE_MODULES } from '../data/landingData';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Gem,
  Factory,
  Printer,
  Briefcase,
};

interface CourseProgramProps {
  onOpenRegistration: () => void;
}

export const CourseProgram: React.FC<CourseProgramProps> = ({ onOpenRegistration }) => {
  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-prime-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime-navy border border-prime-gold/20 text-prime-gold text-xs font-semibold uppercase tracking-wider mb-4">
            Ուսումնական Ծրագիր
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ինչ եք սովորելու <span className="text-prime-gold">PrimeCAD</span>-ում
          </h2>
          <p className="text-base sm:text-lg text-prime-muted">
            4 հիմնական մոդուլ, որոնք ընդգրկում են 3D ոսկերչական մոդելավորման ամբողջական արտադրական workflow-ը։
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSE_MODULES.map((module, index) => {
            const IconComponent = ICON_MAP[module.iconName] || Gem;
            return (
              <div
                key={module.id}
                className="group relative bg-prime-card border border-prime-border hover:border-prime-gold/50 rounded-2xl p-8 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Card Number & Icon Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-prime-navy border border-prime-gold/30 text-prime-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold-glow">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-prime-border group-hover:text-prime-gold/30 transition-colors font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Module Titles */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-prime-gold transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-xs font-semibold text-prime-gold uppercase tracking-wider mb-4">
                    {module.subtitle}
                  </p>

                  <p className="text-sm text-prime-muted leading-relaxed mb-6">
                    {module.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6">
                    {module.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-prime-gold flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA trigger */}
                <div className="pt-4 border-t border-prime-border/50 flex items-center justify-between text-xs text-prime-muted">
                  <span>3 ամսվա ինտենսիվ ծրագրի մաս</span>
                  <button
                    onClick={onOpenRegistration}
                    className="text-prime-gold font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Գրանցվել</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
