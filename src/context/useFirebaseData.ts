import { create } from "zustand";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { DatabaseProps } from "../interfaces/firebaseTypes";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
  databaseURL: process.env.DATABASE_URL,
};

const databaseApp = initializeApp(firebaseConfig, "Portfolio");
const databaseRef = ref(getDatabase(databaseApp));

interface FirebaseStore {
  database: DatabaseProps | null;
  getData: () => void;
}

export const useFirebaseStore = create<FirebaseStore>((set) => ({
  database: null,
  getData: async () => {
    try {
      const snapshot = await get(child(databaseRef, `data`));
      if (snapshot.exists()) {
        set({ database: snapshot.val() });
      }
    } catch (err) {
      console.log("Erro ao carregar API do Firebase:", err);
    }
  },
}));
