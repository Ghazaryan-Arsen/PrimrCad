import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Phone, MessageSquare, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingData';
import { ExperienceLevel, RegistrationFormData, RegistrationPayload } from '../types';
import { trackEvent } from '../utils/analytics';

interface RegistrationSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({
  isOpenModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    phone: '',
    email: '',
    experienceLevel: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Խնդրում ենք մուտքագրել ձեր անունը';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Խնդրում ենք մուտքագրել հեռախոսահամարը';
    } else {
      const cleanPhone = formData.phone.replace(/\D/g, '');
      if (cleanPhone.length < 8) {
        newErrors.phone = 'Խնդրում ենք մուտքագրել վավեր հեռախոսահամար (առնվազն 8 նիշ)';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Խնդրում ենք մուտքագրել էլ. հասցեն';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Խնդրում ենք մուտքագրել վավեր էլ. հասցե';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    trackEvent('registration_submit', {
      experienceLevel: formData.experienceLevel || 'not_specified',
    });

    const webhookUrl =
      import.meta.env.VITE_MAKE_REGISTRATION_WEBHOOK_URL ||
      'https://hook.make.com/placeholder-primecad-webhook';

    const registrationId = `PRIME-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const payload: RegistrationPayload = {
      registrationType: 'primecad-course',
      registrationId,
      submittedAt: new Date().toISOString(),
      source: 'primecad-website',
      data: {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        experienceLevel: formData.experienceLevel || 'Not specified',
      },
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Handle both HTTP ok or placeholder success simulation
      if (response.ok || webhookUrl.includes('placeholder')) {
        setSubmitSuccess(true);
        trackEvent('registration_success', { registrationId });
      } else {
        throw new Error(`Server responded with status: ${response.status}`);
      }
    } catch (err) {
      console.error('[Registration Submission Error]:', err);
      trackEvent('registration_error');
      // User-friendly error message preserving field state for retry
      setSubmitError(
        'Կապի խափանում։ Խնդրում ենք կրկին փորձել կամ զանգահարել 077 76 25 01 համարով։'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <div className="w-full">
      {submitSuccess ? (
        /* Success State View */
        <div className="bg-prime-navy/90 border border-prime-gold/60 rounded-3xl p-8 sm:p-10 text-center shadow-gold-glow animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-prime-gold/20 text-prime-gold border border-prime-gold flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
            <CheckCircle className="w-10 h-10 text-prime-gold" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Շնորհակալություն։ Ձեր հայտը հաջողությամբ ստացվել է։
          </h3>

          <p className="text-sm sm:text-base text-prime-muted mb-8 leading-relaxed max-w-md mx-auto">
            PrimeCAD-ի ներկայացուցիչը շուտով կկապվի ձեզ հետ՝ դասընթացի մանրամասները և ժամանակացույցը հաստատելու համար։
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              onClick={() => trackEvent('phone_click', { location: 'success_modal' })}
              className="w-full sm:w-auto bg-prime-gold text-prime-dark font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-prime-gold-hover transition-colors shadow-gold-glow flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Զանգահարել ({CONTACT_INFO.formattedPhone})</span>
            </a>

            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'success_modal' })}
              className="w-full sm:w-auto bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-emerald-600/30 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Գրել WhatsApp-ով</span>
            </a>
          </div>

          {isOpenModal && (
            <button
              onClick={onCloseModal}
              className="mt-6 text-xs text-prime-muted hover:text-white underline"
            >
              Փակել պատուհանը
            </button>
          )}
        </div>
      ) : (
        /* Form View */
        <form
          onSubmit={handleSubmit}
          className="bg-prime-card border border-prime-border hover:border-prime-gold/40 rounded-3xl p-6 sm:p-10 shadow-2xl transition-colors relative"
        >
          {isOpenModal && onCloseModal && (
            <button
              type="button"
              onClick={onCloseModal}
              className="absolute top-4 right-4 p-2 text-prime-muted hover:text-white rounded-full bg-prime-navy border border-prime-border"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <div className="mb-8 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-prime-gold block mb-2">
              Գրանցում Դասընթացին
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Սկսեք ձեր ճանապարհը Jewelry CAD Modeling-ում
            </h3>
            <p className="text-xs sm:text-sm text-prime-muted">
              Լրացրեք տվյալները, և մենք կկապվենք ձեզ հետ 15 րոպեի ընթացքում։
            </p>
          </div>

          {submitError && (
            <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-400" />
              <span>{submitError}</span>
            </div>
          )}

          <div className="space-y-5">
            {/* Name Field */}
            <div>
              <label htmlFor="reg-name" className="block text-xs font-bold text-white mb-2">
                Անուն*
              </label>
              <input
                id="reg-name"
                type="text"
                placeholder="Արմեն Պետրոսյան"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                className={`w-full bg-prime-dark border rounded-xl px-4 py-3 text-sm text-white placeholder-prime-muted/60 focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? 'border-rose-500 focus:ring-rose-500'
                    : 'border-prime-border focus:border-prime-gold focus:ring-prime-gold/20'
                }`}
              />
              {errors.name && (
                <span className="text-[11px] text-rose-400 font-medium mt-1 block">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="reg-phone" className="block text-xs font-bold text-white mb-2">
                Հեռախոս*
              </label>
              <input
                id="reg-phone"
                type="tel"
                placeholder="077 76 25 01"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                className={`w-full bg-prime-dark border rounded-xl px-4 py-3 text-sm text-white placeholder-prime-muted/60 focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? 'border-rose-500 focus:ring-rose-500'
                    : 'border-prime-border focus:border-prime-gold focus:ring-prime-gold/20'
                }`}
              />
              {errors.phone && (
                <span className="text-[11px] text-rose-400 font-medium mt-1 block">
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="reg-email" className="block text-xs font-bold text-white mb-2">
                Email*
              </label>
              <input
                id="reg-email"
                type="email"
                placeholder="armen@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                className={`w-full bg-prime-dark border rounded-xl px-4 py-3 text-sm text-white placeholder-prime-muted/60 focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-rose-500 focus:ring-rose-500'
                    : 'border-prime-border focus:border-prime-gold focus:ring-prime-gold/20'
                }`}
              />
              {errors.email && (
                <span className="text-[11px] text-rose-400 font-medium mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Experience Level (Optional Select) */}
            <div>
              <label htmlFor="reg-exp" className="block text-xs font-bold text-white mb-2">
                Ձեր փորձի մակարդակը (կամընտրական)
              </label>
              <select
                id="reg-exp"
                value={formData.experienceLevel}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    experienceLevel: e.target.value as ExperienceLevel,
                  })
                }
                className="w-full bg-prime-dark border border-prime-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-prime-gold focus:ring-2 focus:ring-prime-gold/20 transition-all"
              >
                <option value="">Ընտրեք փորձի մակարդակը...</option>
                <option value="beginner">Սկսնակ եմ (զրոյից)</option>
                <option value="intermediate">Ունեմ որոշակի փորձ</option>
                <option value="professional">Աշխատում եմ ոսկերչության ոլորտում</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-prime-gold text-prime-dark font-bold text-base py-4 rounded-xl hover:bg-prime-gold-hover transition-all duration-200 shadow-gold-glow flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Ուղարկվում է...</span>
                </>
              ) : (
                <>
                  <span>Ուղարկել հայտը</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-prime-muted text-center mt-4">
            Ուղարկելով հայտը՝ դուք համաձայնում եք մեր Գաղտնիության Քաղաքականության հետ։
          </p>
        </form>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
        <div className="max-w-xl w-full">{formContent}</div>
      </div>
    );
  }

  return (
    <section id="registration" className="py-20 lg:py-28 bg-prime-navy/60 border-t border-prime-border relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {formContent}
      </div>
    </section>
  );
};
