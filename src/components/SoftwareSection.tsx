import React from 'react';
import { Cpu, Check } from 'lucide-react';
import { SOFTWARE_TOOLS } from '../data/landingData';

export const SoftwareSection: React.FC = () => {
  return (
    <section className="py-20 bg-prime-navy/50 border-y border-prime-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime-dark border border-prime-gold/30 text-prime-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-prime-gold" />
            <span>Մասնագիտական Ծրագրեր</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ծրագրային Ապահովում (Software)
          </h2>
          <p className="text-base sm:text-lg text-prime-muted">
            Դասընթացի ընթացքում ուսումնասիրվող 4 հիմնական professional ծրագրերը, որոնք կազմում են modern jewelry workflow-ը։
          </p>
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOFTWARE_TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="bg-prime-card border border-prime-border hover:border-prime-gold/60 rounded-2xl p-6 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Software Tag */}
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-prime-dark text-prime-gold border border-prime-border mb-4">
                  {tool.tag}
                </span>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-prime-gold transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs font-semibold text-prime-gold mb-3 line-clamp-2">
                  {tool.role}
                </p>

                {/* Description */}
                <p className="text-xs text-prime-muted leading-relaxed mb-6">
                  {tool.description}
                </p>
              </div>

              {/* Workflow Footnote */}
              <div className="pt-4 border-t border-prime-border/50 flex items-center gap-2 text-[11px] text-gray-300 font-medium">
                <Check className="w-3.5 h-3.5 text-prime-gold" />
                <span>Ուսուցում 0-ից practical workflow-ով</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
