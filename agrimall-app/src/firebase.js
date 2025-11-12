import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-ghQFkUvTofrPC5q9axD3Co93fdRX6mc",
    authDomain: "agrimall-mvp.firebaseapp.com",
      projectId: "agrimall-mvp",
        storageBucket: "agrimall-mvp.firebasestorage.app",
          messagingSenderId: "1086289168475",
            appId: "1:1086289168475:web:b684d66f195c5c3acd577e"
            };

            const app = initializeApp(firebaseConfig);
            export const db = getFirestore(app);
            export const auth = getAuth(app);
            export default app;