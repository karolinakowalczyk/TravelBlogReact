import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAW8hNJncjK9AZtKrCeGjKRiiUbyA0XoXc",
  authDomain: "travelblog-b7941.firebaseapp.com",
  projectId: "travelblog-b7941",
  storageBucket: "travelblog-b7941.appspot.com",
  messagingSenderId: "839540723786",
  appId: "1:839540723786:web:1bef7981791d6bdbd396b3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
