import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';
import { FAQ_ITEMS, CONTACT_INFO } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-prime-warm-white text-prime-dark relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-prime-navy/10 border border-prime-navy/20 text-prime-navy text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Հաճախ Տրվող Հարցեր</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-prime-dark tracking-tight mb-2 sm:mb-3">
            Հաճախ Տրվող Հարցեր (FAQ)
          </h2>
          <p className="text-xs sm:text-base text-gray-600">
            Գտեք պատասխանները PrimeCAD-ի դասընթացների և ուսուցման ֆորմատի վերաբերյալ։
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white border rounded-2xl transition-all overflow-hidden ${
                  isOpen ? 'border-prime-navy shadow-sm' : 'border-gray-200/80 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-prime-dark">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg border text-prime-navy transition-transform ${isOpen ? 'rotate-180 bg-prime-navy text-white border-prime-navy' : 'bg-gray-100 border-gray-200'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Footer */}
        <div className="mt-8 sm:mt-12 text-center bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <span className="text-xs sm:text-sm font-bold text-prime-dark block">
              Ունե՞ք այլ հարցեր։
            </span>
            <span className="text-[11px] sm:text-xs text-gray-500">
              Կապ հաստատեք PrimeCAD-ի հետ, և մենք սիրով կպատասխանենք ձեր հարցերին։
            </span>
          </div>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="bg-prime-navy text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-prime-navy/90 transition-colors shadow-sm flex-shrink-0"
          >
            <Phone className="w-4 h-4 text-prime-gold" />
            <span>Զանգահարել ({CONTACT_INFO.formattedPhone})</span>
          </a>
        </div>

      </div>
    </section>
  );
};
