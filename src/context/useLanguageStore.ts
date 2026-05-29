import { create } from 'zustand';

export type Language = 'en' | 'pt';

interface LanguageState {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = window.localStorage.getItem('language');
    if (stored === 'en' || stored === 'pt') {
      return stored as Language;
    }
    const navLang = window.navigator.language || '';
    if (navLang.toLowerCase().includes('pt')) {
      return 'pt';
    }
  }
  return 'en'; 
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: getInitialLanguage(),
  toggleLanguage: () => set((state) => {
    const nextLang: Language = state.language === 'en' ? 'pt' : 'en';
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('language', nextLang);
    }
    return { language: nextLang };
  }),
  setLanguage: (language) => set(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('language', language);
    }
    return { language };
  }),
}));
