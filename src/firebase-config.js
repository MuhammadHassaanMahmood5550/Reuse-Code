import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBPpApjtTa4sSQkcU6G4gc3ZKMgN3IcXzY",
    authDomain: "auth-tutorial-1cca8.firebaseapp.com",
    projectId: "auth-tutorial-1cca8",
    storageBucket: "auth-tutorial-1cca8.appspot.com",
    messagingSenderId: "440924022199",
    appId: "1:440924022199:web:902c30054643eb43bd3432",
    measurementId: "G-18177D074Y"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);