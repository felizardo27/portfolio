import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { child, get, getDatabase, ref } from "firebase/database";
import { useState } from "react";
import { DatabaseProps } from "../interfaces/firebaseTypes";

export function useFirebase() {
  const [database, setDatabase] = useState<DatabaseProps>()

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

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const databaseApp = initializeApp(firebaseConfig, "Portfolio");

  const databaseRef = ref(getDatabase(databaseApp));

  const getData = () => {
    get(child(databaseRef, `data`))
      .then(async (snapshot) => {
        if (snapshot.exists()) {
          const screen = await snapshot.val();
          setDatabase(screen);
        }
      })
      .catch((err) => {
        console.log("Erro loading api Firebase:", err);
      });
  };


  return {
    analytics,
    getData,
    database,
  };
}
