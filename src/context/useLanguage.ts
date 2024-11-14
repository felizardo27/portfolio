import { create } from "zustand";

type LanguageType = "ptBr" | "enUs";

interface LanguageStoreProps {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

function getInitialLanguage(): LanguageType {
  const storedLanguage = localStorage.getItem("language") as LanguageType;
  return storedLanguage ? storedLanguage : "ptBr";
}

export const useLanguage = create<LanguageStoreProps>((set) => ({
  language: getInitialLanguage(),
  setLanguage: (language: LanguageType) =>
    set(() => ({
      language: language,
    })),
}));
