import { useFirebaseStore } from "../context/useFirebaseData";
import { useLanguage } from "../context/useLanguage";

export function dataAbout() {
  const { language } = useLanguage();
  const { database } = useFirebaseStore();

  return {
    data: language === "ptBr" ? database?.about?.pt : database?.about?.en,
  };
}
