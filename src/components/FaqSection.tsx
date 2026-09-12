import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';
import { FAQ_ITEMS, CONTACT_INFO } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-prime-dark relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime-navy border border-prime-gold/30 text-prime-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-prime-gold" />
            <span>Հաճախ Տրվող Հարցեր</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Հաճախ Տրվող Հարցեր (FAQ)
          </h2>
          <p className="text-base sm:text-lg text-prime-muted">
            Գտեք պատասխանները PrimeCAD-ի դասընթացների, ծրագրի և ուսուցման ֆորմատի վերաբերյալ։
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-prime-card border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-prime-gold/60 shadow-gold-glow' : 'border-prime-border hover:border-prime-border/80'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-prime-gold/50 rounded-2xl"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-xl bg-prime-navy border border-prime-border text-prime-gold transition-transform duration-200 ${isOpen ? 'rotate-180 bg-prime-gold text-prime-dark' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-prime-border/40 pt-4 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Footer */}
        <div className="mt-12 text-center bg-prime-navy/50 border border-prime-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-sm font-bold text-white block">
              Ունե՞ք այլ հարցեր, որոնք նշված չեն այստեղ։
            </span>
            <span className="text-xs text-prime-muted">
              Կապ հաստատեք PrimeCAD-ի հետ, և մենք սիրով կպատասխանենք ձեր բոլոր հարցերին։
            </span>
          </div>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="bg-prime-gold text-prime-dark font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-prime-gold-hover transition-colors shadow-gold-glow flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Զանգահարել ({CONTACT_INFO.formattedPhone})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
