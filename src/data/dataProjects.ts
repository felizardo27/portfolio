
import { useFirebaseStore } from "../context/useFirebaseData";

export function dataProjects() {
  const { database } = useFirebaseStore();

  return {
    data: database?.projects
  };
}
