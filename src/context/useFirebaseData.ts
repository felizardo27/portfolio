import { create } from "zustand";
import { getApps, initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  child,
  get as getFirebaseData,
} from "firebase/database";
import {
  getAnalytics,
  isSupported,
  logEvent,
  type Analytics,
} from "firebase/analytics";

import { DatabaseProps } from "../interfaces/firebaseTypes";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const databaseApp =
  getApps().find((app) => app.name === "Portfolio") ??
  initializeApp(firebaseConfig, "Portfolio");

const databaseInstance = getDatabase(databaseApp);
const databaseRef = ref(databaseInstance);

interface FirebaseStore {
  database: DatabaseProps | null;
  analytics: Analytics | null;
  getData: () => Promise<void>;
  initAnalytics: () => Promise<void>;
  logAnalyticsEvent: (
    eventName: string,
    eventParams?: Record<string, string | number | boolean>
  ) => void;
}

export const useFirebaseStore = create<FirebaseStore>((set, getStore) => ({
  database: null,
  analytics: null,

  initAnalytics: async () => {
    try {
      const supported = await isSupported();

      if (!supported) {
        return;
      }

      const analytics = getAnalytics(databaseApp);

      set({ analytics });
    } catch (err) {
      console.log("Erro ao inicializar Analytics:", err);
    }
  },

  logAnalyticsEvent: (eventName, eventParams) => {
    const analytics = getStore().analytics;

    if (!analytics) {
      return;
    }

    logEvent(analytics, eventName, eventParams);
  },

  getData: async () => {
    try {
      const snapshot = await getFirebaseData(child(databaseRef, "data"));

      if (snapshot.exists()) {
        set({ database: snapshot.val() });
        return;
      }

      const rootSnapshot = await getFirebaseData(ref(databaseInstance));

      if (rootSnapshot.exists()) {
        const rootVal = rootSnapshot.val();

        set({
          database: rootVal.data ? rootVal.data : rootVal,
        });
      }
    } catch (err) {
      console.log("Erro ao carregar API do Firebase:", err);
    }
  },
}));