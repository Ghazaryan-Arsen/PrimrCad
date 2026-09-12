import React, { useState } from 'react';
import { Award, CheckCircle2, User, FileCheck, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';

export const InstructorSection: React.FC = () => {
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  return (
    <section id="instructor" className="py-20 lg:py-28 bg-prime-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-prime-navy border border-prime-gold/30 text-prime-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-prime-gold" />
            <span>Դասավանդող</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ով է անցկացնում դասընթացը
          </h2>
          <p className="text-base sm:text-lg text-prime-muted">
            Սովորեք ոլորտի առաջատար մասնագետից՝ 20+ տարվա դասավանդման և արտադրական փորձով։
          </p>
        </div>

        {/* Instructor Card Grid */}
        <div className="bg-prime-card border border-prime-border rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Instructor Image Area */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full rounded-2xl bg-prime-navy border border-prime-border overflow-hidden flex flex-col items-center justify-center p-6 text-center group">

                {/* Visual Avatar Placeholder */}
                <div className="w-32 h-32 rounded-full bg-prime-dark border-2 border-prime-gold/40 flex items-center justify-center mb-4 shadow-gold-glow">
                  <User className="w-16 h-16 text-prime-gold" />
                </div>

                <span className="text-xl font-bold text-white mb-1">
                  {CONTACT_INFO.instructorName}
                </span>
                <span className="text-xs font-semibold text-prime-gold uppercase tracking-wider mb-4">
                  {CONTACT_INFO.instructorTitle}
                </span>

                <div className="text-[11px] text-prime-muted bg-prime-dark/80 px-3 py-1.5 rounded-lg border border-prime-border">
                  Replaceable Photo Asset Path:
                  <code className="block text-prime-gold text-[10px] mt-0.5">/assets/instructor-andranik.jpg</code>
                </div>

                {/* Rhino Trainer Badge */}
                <div className="absolute top-4 right-4 bg-prime-gold text-prime-dark font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Authorized</span>
                </div>

              </div>
            </div>

            {/* Instructor Qualifications */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-prime-gold uppercase tracking-wider mb-2">
                <span>McNeel Authorized Trainer</span>
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-4">
                {CONTACT_INFO.instructorName}
              </h3>

              <p className="text-lg font-semibold text-prime-gold mb-6">
                {CONTACT_INFO.instructorExperience} · {CONTACT_INFO.instructorTitle}
              </p>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Անդրանիկը ունի 20+ տարվա դասավանդման փորձ 3D Jewelry CAD Modeling-ի ոլորտում։ Ուսուցումը հիմնված է բացառապես իրական ոսկերչական արտադրության workflow-ի վրա, որտեղ յուրաքանչյուր CAD model նախագծվում է ձուլման, քարերի տեղադրման և հղկման տեխնոլոգիական չափանիշներով։
              </p>

              {/* Verified Points */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-prime-gold flex-shrink-0 mt-0.5" />
                  <span>Ռինոսերոս (Rhino) ծրագրի պաշտոնական Authorized Trainer</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-prime-gold flex-shrink-0 mt-0.5" />
                  <span>20+ տարվա փորձարկված ուսումնական մեթոդաբանություն</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-prime-gold flex-shrink-0 mt-0.5" />
                  <span>Անհատական ուշադրություն 2–4 հոգանոց փոքր խմբերում</span>
                </div>
              </div>

              {/* Certificate Document Preview Action */}
              <div className="pt-6 border-t border-prime-border/60 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowCertificateModal(true)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-prime-gold hover:text-prime-gold-hover border border-prime-gold/40 hover:border-prime-gold px-4 py-2.5 rounded-xl bg-prime-navy/60 transition-colors"
                >
                  <FileCheck className="w-4 h-4" />
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
          <div className="bg-prime-card border border-prime-border rounded-2xl max-w-lg w-full p-6 relative">
            <h4 className="text-xl font-bold text-white mb-2">
              Authorized Rhino Trainer Certificate
            </h4>
            <p className="text-xs text-prime-muted mb-6">
              Պաշտոնական հավաստագիր. visual document asset-ը պատրաստ է փոխարինման։
            </p>

            <div className="aspect-[4/3] w-full bg-prime-navy border border-dashed border-prime-gold/40 rounded-xl flex flex-col items-center justify-center p-6 text-center mb-6">
              <Award className="w-16 h-16 text-prime-gold mb-3" />
              <span className="text-sm font-semibold text-white">
                Authorized Rhino Trainer Credential
              </span>
              <span className="text-xs text-prime-muted mt-1">
                Asset location: <code>/public/assets/rhino-trainer-cert.jpg</code>
              </span>
            </div>

            <button
              onClick={() => setShowCertificateModal(false)}
              className="w-full bg-prime-navy border border-prime-border text-white font-semibold py-2.5 rounded-xl text-sm hover:border-prime-gold transition-colors"
            >
              Փակել
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
