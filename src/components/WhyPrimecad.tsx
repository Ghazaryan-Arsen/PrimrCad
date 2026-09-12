import React from 'react';
import { Award, Users, ShieldCheck, Globe, ArrowRight } from 'lucide-react';

interface WhyPrimecadProps {
  onOpenRegistration: () => void;
}

export const WhyPrimecad: React.FC<WhyPrimecadProps> = ({ onOpenRegistration }) => {
  const differentiators = [
    {
      icon: Award,
      title: '20+ Տարվա Դասավանդման Փորձ',
      benefit: 'Ուսանողը ստանում է տարիների փորձարկված մեթոդաբանություն և Authorized Rhino Trainer-ի ուղղորդում։',
      details: 'Չկան դատարկ տեսական դասեր. ամեն րոպեն ծառայում է practical skill-ի զարգացմանը։'
    },
    {
      icon: ShieldCheck,
      title: 'Real Jewelry Production Workflow',
      benefit: 'Սովորում եք ոչ թե պարզապես 3D «նկարել», այլ ստեղծել իրական ձուլման (casting) պատրաստ ֆայլեր։',
      details: 'Հաշվի են առնվում մետաղի կծկումը, քարերի տեղադրումը և հղկման տեխնոլոգիական պահանջները։'
    },
    {
      icon: Users,
      title: 'Փոքր Խմբեր (2–4 Ուսանող)',
      benefit: 'Առավելագույն ուշադրություն յուրաքանչյուր ուսանողի աշխատանքին և հարցերին։',
      details: 'Small-group learning-ը ապահովում է անհատական մոտեցում, ինչպես private tutoring-ի ժամանակ։'
    },
    {
      icon: Globe,
      title: 'Freelance & Professional Work Preparation',
      benefit: 'Պատրաստվում եք ինքնուրույն աշխատանքի տեղական և միջազգային պատվիրատուների հետ։',
      details: 'Սովորում եք ձևավորել portfolio և պատրաստել digital models 3D marketplace-ների համար։'
    }
  ];

  const steps = [
    { step: '01', title: 'Գրանցվում եք կայքում', desc: 'Լրացրեք կարճ հայտը 10 վայրկյանում' },
    { step: '02', title: 'PrimeCAD-ը կապվում է ձեզ հետ', desc: 'Ճշտում ենք ձեր ժամանակացույցն ու նախընտրած ֆորմատը' },
    { step: '03', title: 'Սկսում եք live դասընթացը', desc: 'Online կամ Offline (Քաջազնունի 1) փոքր խմբում' },
    { step: '04', title: 'Զարգացնում եք skills & portfolio', desc: '3 ամսում ստեղծում եք production-ready CAD աշխատանքներ' }
  ];

  return (
    <section id="course-details" className="py-20 lg:py-28 bg-prime-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime-navy border border-prime-gold/30 text-prime-gold text-xs font-semibold uppercase tracking-wider mb-4">
            Առավելություններ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ինչու՞ ընտրել <span className="text-prime-gold">PrimeCAD</span>-ը
          </h2>
          <p className="text-base sm:text-lg text-prime-muted">
            Ինչ օգուտ է ստանում ուսանողը PrimeCAD-ի հատուկ մշակված ուսուցման մոտեցումից։
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {differentiators.map((diff, i) => {
            const IconComponent = diff.icon;
            return (
              <div
                key={i}
                className="bg-prime-card border border-prime-border rounded-2xl p-8 hover:border-prime-gold/40 transition-colors shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-prime-navy border border-prime-gold/30 text-prime-gold flex items-center justify-center mb-6 shadow-gold-glow">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {diff.title}
                </h3>
                <p className="text-sm font-semibold text-prime-gold mb-2 leading-relaxed">
                  {diff.benefit}
                </p>
                <p className="text-xs text-prime-muted leading-relaxed">
                  {diff.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* How It Works Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Ինչպես է ընթանում ուսուցման գործընթացը (4-Step Flow)
          </h3>
          <p className="text-sm text-prime-muted">
            Պարզ և թափանցիկ ճանապարհ դեպի նոր մասնագիտություն
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-prime-navy/60 border border-prime-border rounded-xl p-6 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black text-prime-gold font-mono block mb-3">
                  {s.step}
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  {s.title}
                </h4>
                <p className="text-xs text-prime-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenRegistration}
            className="inline-flex items-center gap-2 bg-prime-gold text-prime-dark font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-prime-gold-hover transition-colors shadow-gold-glow"
          >
            <span>Սկսել հիմա — Գրանցվել դասընթացին</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
