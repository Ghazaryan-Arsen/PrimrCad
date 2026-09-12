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
    <section id="curriculum" className="py-12 sm:py-20 bg-prime-warm-white text-prime-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-prime-navy/10 border border-prime-navy/20 text-prime-navy text-xs font-bold uppercase tracking-wider mb-3">
            Ուսումնական Ծրագիր
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-prime-dark tracking-tight mb-3">
            Ինչ եք սովորելու <span className="text-amber-600">PrimeCAD</span>-ում
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            4 հիմնական մոդուլ, որոնք ընդգրկում են 3D ոսկերչական մոդելավորման ամբողջական արտադրական workflow-ը։
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {COURSE_MODULES.map((module, index) => {
            const IconComponent = ICON_MAP[module.iconName] || Gem;
            return (
              <div
                key={module.id}
                className="group relative bg-white border border-gray-200/80 hover:border-prime-navy/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Card Number & Icon Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-prime-navy text-prime-gold flex items-center justify-center shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-gray-200 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Module Titles */}
                  <h3 className="text-xl sm:text-2xl font-bold text-prime-dark mb-1.5">
                    {module.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
                    {module.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {module.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6">
                    {module.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA trigger */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>3 ամսվա ինտենսիվ ծրագիր</span>
                  <button
                    onClick={onOpenRegistration}
                    className="text-prime-navy font-bold hover:text-amber-700 inline-flex items-center gap-1 transition-colors"
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
