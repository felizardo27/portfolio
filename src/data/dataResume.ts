import { useFirebaseStore } from "../context/useFirebaseData";
import { useLanguage } from "../context/useLanguage";

export function dataResume() {
  const { language } = useLanguage();
  const { database } = useFirebaseStore();

  return {
    data:
      language === "ptBr" ? database?.resume?.pt.url : database?.resume?.en.url,
  };
}
