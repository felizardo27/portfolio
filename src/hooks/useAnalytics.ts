import { useCallback } from 'react';
import { useFirebaseStore } from '../context/useFirebaseData';
import { useLanguageStore } from '../context/useLanguageStore';

type AnalyticsValue = string | number | boolean;

type AnalyticsParams = Record<string, AnalyticsValue | null | undefined>;

const cleanParams = (params?: AnalyticsParams): Record<string, AnalyticsValue> => {
  if (!params) return {};

  return Object.entries(params).reduce<Record<string, AnalyticsValue>>(
    (acc, [key, value]) => {
      if (value !== null && value !== undefined) {
        acc[key] = value;
      }

      return acc;
    },
    {}
  );
};

const getCurrentLocation = () => {
  if (typeof window === 'undefined') {
    return 'server';
  }

  const { pathname, hash } = window.location;

  if (hash) {
    return hash.replace('#', '');
  }

  if (pathname === '/') {
    return 'home';
  }

  return pathname.replace('/', '');
};

export const useAnalytics = () => {
  const { language } = useLanguageStore();
  const logAnalyticsEvent = useFirebaseStore((state) => state.logAnalyticsEvent);

  const track = useCallback(
    (eventName: string, params?: AnalyticsParams) => {
      const location = getCurrentLocation();

      logAnalyticsEvent(eventName, {
        language,
        location,
        path: typeof window !== 'undefined' ? window.location.pathname : 'server',
        ...cleanParams(params),
      });
    },
    [language, logAnalyticsEvent]
  );

  return {
    track,
  };
};