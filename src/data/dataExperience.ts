import { useFirebaseStore } from "../context/useFirebaseData";
import { useLanguage } from "../context/useLanguage";

export function dataExperience() {
  const { language } = useLanguage();
  const {database} = useFirebaseStore();

  return {
    data: language === "ptBr" ? database?.experience.pt : database?.experience?.en
  };
}
