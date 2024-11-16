// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export function useFirebase() {

  const firebaseConfig = {
    apiKey: "AIzaSyBx9iCUJtpX9habTD4PAxc1r0miLwn1_tI",
    authDomain: "portfolio-a67fb.firebaseapp.com",
    projectId: "portfolio-a67fb",
    storageBucket: "portfolio-a67fb.firebasestorage.app",
    messagingSenderId: "275007287963",
    appId: "1:275007287963:web:b5de47eba8e1a63811cc3e",
    measurementId: "G-EWV6NMQ0QX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return {
    analytics
  }

}


