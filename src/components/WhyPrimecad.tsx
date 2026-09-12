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

  return (
    <section id="course-details" className="py-12 sm:py-20 bg-prime-warm-white text-prime-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-prime-navy/10 border border-prime-navy/20 text-prime-navy text-xs font-bold uppercase tracking-wider mb-3">
            Առավելություններ
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-prime-dark tracking-tight mb-3">
            Ինչու՞ ընտրել <span className="text-amber-600">PrimeCAD</span>-ը
          </h2>
          <p className="text-xs sm:text-base text-gray-600">
            Ինչ օգուտ է ստանում ուսանողը PrimeCAD-ի հատուկ մշակված ուսուցման մոտեցումից։
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {differentiators.map((diff, i) => {
            const IconComponent = diff.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 hover:border-prime-navy/30 transition-colors shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-prime-navy text-prime-gold flex items-center justify-center mb-5 shadow-sm">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-prime-dark mb-2">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-amber-700 mb-2 leading-relaxed">
                  {diff.benefit}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {diff.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick CTA */}
        <div className="text-center">
          <button
            onClick={onOpenRegistration}
            className="inline-flex items-center gap-2 bg-prime-navy text-white hover:bg-prime-navy/90 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
          >
            <span>Գրանցվել դասընթացին</span>
            <ArrowRight className="w-4 h-4 text-prime-gold" />
          </button>
        </div>

      </div>
    </section>
  );
};
