import { create } from "zustand";

type LanguageType = "ptBr" | "enUs";

interface LanguageStoreProps {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

function getInitialLanguage(): LanguageType {
  const browserLanguage = navigator.language || navigator.languages[0];
  return browserLanguage.startsWith('pt') ? 'ptBr' : 'enUs';
}

export const useLanguage = create<LanguageStoreProps>((set) => ({
  language: getInitialLanguage(),
  setLanguage: (language: LanguageType) =>
    set(() => ({
      language: language,
    })),
}));
