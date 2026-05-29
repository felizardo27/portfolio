import { useFirebaseStore } from "../context/useFirebaseData";

export function dataSocialLinks() {
  const { database } = useFirebaseStore();

  return {
    data: database?.socialLinks,
  };
}
