import { initializeApp } from 'firebase/app';
import { getFirestore} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import {UploadResult} from './types'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


// Инициализация
const app = initializeApp(firebaseConfig);

// Сервисы
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);




// Методы
export const uploadFile = async (file: File, path: string = 'uploads'): Promise<UploadResult> => {
    // Генерируем уникальный ID для анализа
    const storageRef = ref(storage, `${path}${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return { url, ref: storageRef.fullPath };
};
export const signInWithGoogle = async (): Promise<User> => {
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

export { storage, auth, provider, db };