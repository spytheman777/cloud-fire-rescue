import { initializeApp } from "firebase/app";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKM02Z6hcQBMdsFKanxjXgTvm_LvZmtUQ",

  authDomain:
    "cloud-fire-rescue.firebaseapp.com",

  projectId:
    "cloud-fire-rescue",

  storageBucket:
    "cloud-fire-rescue.firebasestorage.app",

  messagingSenderId:
    "899059224978",

  appId:
    "1:899059224978:web:fdc70cd04f2caebf6c714b",

  measurementId:
    "G-QNVZEXSSRX",
};

const app =
  initializeApp(
    firebaseConfig
  );

export const db =
  getFirestore(app);