import { useFirebaseStore } from "../context/useFirebaseData";
import { useLanguage } from "../context/useLanguage";

export function dataEducation() {
  const { language } = useLanguage();
  const { database } = useFirebaseStore();

  return {
    data: language === "ptBr" ? database?.education.pt : database?.education.en,
  };
}
