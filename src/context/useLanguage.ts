import { useLanguageStore } from "./useLanguageStore";

export function useLanguage() {
  const { language, toggleLanguage, setLanguage } = useLanguageStore();
  const mapped = language === "pt" ? "ptBr" : "enUs";
  return {
    language: mapped,
    toggleLanguage,
    setLanguage,
  };
}
