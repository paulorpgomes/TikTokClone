import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyBHgMIPjT8Q_WzXcWA6ivz3bHpFoa1GIxI",
  authDomain: "tiktok-clone-b438e.firebaseapp.com",
  projectId: "tiktok-clone-b438e",
  storageBucket: "tiktok-clone-b438e.appspot.com",
  messagingSenderId: "466983586919",
  appId: "1:466983586919:web:7fbb0965f8c6fca04bd8c2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;