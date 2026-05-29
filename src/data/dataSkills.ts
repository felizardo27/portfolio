import { useFirebaseStore } from "../context/useFirebaseData";

export function dataSkills() {
  const { database } = useFirebaseStore();

  return {
    data: database?.skills,
  };
}
