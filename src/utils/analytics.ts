export type AnalyticsEvent =
  | 'registration_cta_click'
  | 'registration_submit'
  | 'registration_success'
  | 'registration_error'
  | 'phone_click'
  | 'whatsapp_click'
  | 'instagram_click'
  | 'section_view';

export const trackEvent = (eventName: AnalyticsEvent, payload?: Record<string, unknown>) => {
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event]: ${eventName}`, payload || '');
  }

  if (typeof window !== 'undefined') {
    const windowWithAnalytics = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      fbq?: (...args: unknown[]) => void;
    };

    if (windowWithAnalytics.gtag) {
      windowWithAnalytics.gtag('event', eventName, payload);
    }

    if (windowWithAnalytics.fbq) {
      windowWithAnalytics.fbq('trackCustom', eventName, payload);
    }
  }
};
