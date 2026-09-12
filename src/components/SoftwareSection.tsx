import React from 'react';
import { Cpu, Check } from 'lucide-react';
import { SOFTWARE_TOOLS } from '../data/landingData';

export const SoftwareSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-white border-y border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime-navy/10 border border-prime-navy/20 text-prime-navy text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Մասնագիտական Ծրագրեր</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-prime-dark tracking-tight mb-2 sm:mb-3">
            Ծրագրային Ապահովում (Software)
          </h2>
          <p className="text-xs sm:text-base text-gray-600">
            Դասընթացի ընթացքում ուսումնասիրվող 4 professional ծրագրերը.
          </p>
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SOFTWARE_TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="bg-prime-warm-white border border-gray-200/80 hover:border-prime-navy/30 rounded-2xl p-4 sm:p-6 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <span className="inline-block text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded bg-prime-navy text-prime-gold mb-3">
                  {tool.tag}
                </span>

                <h3 className="text-lg sm:text-2xl font-bold text-prime-dark mb-1">
                  {tool.name}
                </h3>
                <p className="text-[11px] sm:text-xs font-bold text-amber-700 mb-2 line-clamp-2">
                  {tool.role}
                </p>

                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-gray-700 font-semibold">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>0-ից practical workflow</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
