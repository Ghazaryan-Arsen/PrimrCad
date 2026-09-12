import React, { useState } from 'react';
import { Award, CheckCircle2, User, FileCheck, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';

export const InstructorSection: React.FC = () => {
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  return (
    <section id="instructor" className="py-12 sm:py-20 bg-prime-warm-white text-prime-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-prime-navy/10 border border-prime-navy/20 text-prime-navy text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Դասավանդող</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-prime-dark tracking-tight mb-2 sm:mb-3">
            Ով է անցկացնում դասընթացը
          </h2>
          <p className="text-xs sm:text-base text-gray-600">
            Սովորեք ոլորտի առաջատար մասնագետից՝ 20+ տարվա դասավանդման և արտադրական փորձով։
          </p>
        </div>

        {/* Instructor Card Grid */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Instructor Image Area */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full rounded-2xl bg-prime-navy border border-prime-border overflow-hidden flex flex-col items-center justify-center p-6 text-center text-white">

                <div className="w-28 h-28 rounded-full bg-prime-dark border-2 border-prime-gold/40 flex items-center justify-center mb-4 shadow-gold-glow">
                  <User className="w-14 h-14 text-prime-gold" />
                </div>

                <span className="text-xl font-bold mb-1">
                  {CONTACT_INFO.instructorName}
                </span>
                <span className="text-xs font-semibold text-prime-gold uppercase tracking-wider mb-3">
                  {CONTACT_INFO.instructorTitle}
                </span>

                <div className="text-[10px] text-prime-muted bg-prime-dark/80 px-3 py-1.5 rounded-lg border border-prime-border">
                  Replaceable Photo Asset Path:
                  <code className="block text-prime-gold text-[10px] mt-0.5">/assets/instructor-andranik.jpg</code>
                </div>

                <div className="absolute top-4 right-4 bg-prime-gold text-prime-dark font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Authorized</span>
                </div>

              </div>
            </div>

            {/* Instructor Qualifications */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                <span>McNeel Authorized Trainer</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-prime-dark mb-3">
                {CONTACT_INFO.instructorName}
              </h3>

              <p className="text-sm sm:text-base font-bold text-prime-navy mb-4">
                {CONTACT_INFO.instructorExperience} · {CONTACT_INFO.instructorTitle}
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                Անդրանիկը ունի 20+ տարվա դասավանդման փորձ 3D Jewelry CAD Modeling-ի ոլորտում։ Ուսուցումը հիմնված է բացառապես իրական ոսկերչական արտադրության workflow-ի վրա, որտեղ յուրաքանչյուր CAD model նախագծվում է ձուլման, քարերի տեղադրման և հղկման տեխնոլոգիական չափանիշներով։
              </p>

              {/* Verified Points */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Ռինոսերոս (Rhino) ծրագրի պաշտոնական Authorized Trainer</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>20+ տարվա փորձարկված ուսումնական մեթոդաբանություն</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Անհատական ուշադրություն 2–4 հոգանոց փոքր խմբերում</span>
                </div>
              </div>

              {/* Certificate Document Preview Action */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowCertificateModal(true)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-prime-navy hover:text-amber-700 border border-gray-300 px-4 py-2 rounded-xl bg-gray-50 transition-colors"
                >
                  <FileCheck className="w-4 h-4 text-amber-700" />
                  <span>Տեսնել Rhino Certificate Preview-ն</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Rhino Certificate Modal */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white border border-gray-200 rounded-2xl max-w-lg w-full p-6 relative">
            <h4 className="text-xl font-bold text-prime-dark mb-2">
              Authorized Rhino Trainer Certificate
            </h4>
            <p className="text-xs text-gray-500 mb-6">
              Պաշտոնական հավաստագիր. visual document asset-ը պատրաստ է փոխարինման։
            </p>

            <div className="aspect-[4/3] w-full bg-prime-navy border border-dashed border-prime-gold/40 rounded-xl flex flex-col items-center justify-center p-6 text-center text-white mb-6">
              <Award className="w-16 h-16 text-prime-gold mb-3" />
              <span className="text-sm font-semibold">
                Authorized Rhino Trainer Credential
              </span>
              <span className="text-xs text-prime-muted mt-1">
                Asset location: <code>/public/assets/rhino-trainer-cert.jpg</code>
              </span>
            </div>

            <button
              onClick={() => setShowCertificateModal(false)}
              className="w-full bg-prime-navy text-white font-semibold py-2.5 rounded-xl text-sm hover:bg-prime-navy/90 transition-colors"
            >
              Փակել
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
