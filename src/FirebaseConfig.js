// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Config from "react-native-config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAKICO4720mu5S4A14c65zZutWB_z5K3Cs",
  authDomain: "placa-3bfab.firebaseapp.com",
  projectId: "placa-3bfab",
  storageBucket: "placa-3bfab.firebasestorage.app",
  messagingSenderId: "542079509928",
  appId: "1:542079509928:web:c9df195b025e990f28299d",
  measurementId: "G-EC361TXMKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};
export default app;