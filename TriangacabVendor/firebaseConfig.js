// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8LVSlYddxj_PygDTTJ9j260XjEpd2bM0",
  authDomain: "tirangacab-a4242.firebaseapp.com",
  databaseURL: "https://tirangacab-a4242-default-rtdb.firebaseio.com",
  projectId: "tirangacab-a4242",
  storageBucket: "tirangacab-a4242.appspot.com",
  messagingSenderId: "539613006126",
  appId: "1:539613006126:web:0e2218547f2816f71452bf",
  measurementId: "G-FYTR93EDGM"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);

export const initAuth = async () => {
  try {
    const userCredential = await signInAnonymously(auth);
    console.log("✅ Firebase auth success:", userCredential.user.uid);
    return userCredential.user.uid;
  } catch (error) {
    console.error("❌ Firebase auth failed:", error);
    return null;
  }
};
