import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/landingData';

export const TestimonialsSection: React.FC = () => {
  // STRICT RULE: Do not render fake reviews or lorem ipsum testimonials.
  // Render component only when real student feedback is provided in TESTIMONIALS_DATA.
  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-prime-navy/40 border-y border-prime-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime-dark border border-prime-gold/30 text-prime-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5 text-prime-gold" />
            <span>Ուսանողների Կարծիքները</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ինչ են ասում PrimeCAD-ի շրջանավարտները
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-prime-card border border-prime-border rounded-2xl p-6 relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-prime-gold/40 mb-4" />
              <p className="text-sm text-gray-200 leading-relaxed mb-6 italic">
                "{item.comment}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-prime-border/50">
                {item.avatarUrl && (
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-prime-gold/40"
                  />
                )}
                <div>
                  <span className="text-sm font-bold text-white block">
                    {item.name}
                  </span>
                  <span className="text-xs text-prime-muted">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
