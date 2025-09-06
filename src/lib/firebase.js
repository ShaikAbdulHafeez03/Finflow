import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

if (!process.env.NEXT_PUBLIC_FIREBASE_CONFIG) {
  throw new Error(
    "Missing NEXT_PUBLIC_FIREBASE_CONFIG in environment variables"
  );
}

let firebaseConfig;
try {
  firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);
} catch (error) {
  throw new Error("Invalid JSON in NEXT_PUBLIC_FIREBASE_CONFIG");
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
