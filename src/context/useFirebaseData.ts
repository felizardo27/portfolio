import { create } from "zustand";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { DatabaseProps } from "../interfaces/firebaseTypes";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const databaseApp = initializeApp(firebaseConfig, "Portfolio");
const databaseRef = ref(getDatabase(databaseApp));

interface FirebaseStore {
  database: DatabaseProps | null;
  getData: () => Promise<void>;
}

export const useFirebaseStore = create<FirebaseStore>((set) => ({
  database: null,

  getData: async () => {
    try {
      const snapshot = await get(child(databaseRef, `data`));

      if (snapshot.exists()) {
        set({ database: snapshot.val() });
      } else {
        const rootSnapshot = await get(ref(getDatabase(databaseApp)));
        if (rootSnapshot.exists()) {
          const rootVal = rootSnapshot.val();
          set({ database: rootVal.data ? rootVal.data : rootVal });
        }
      }
    } catch (err) {
      console.log("Erro ao carregar API do Firebase:", err);
    }
  },
}));
