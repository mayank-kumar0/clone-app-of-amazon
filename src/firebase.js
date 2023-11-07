// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCCEbzPHgTb-7zL2r6GaCdIDgMztKtO08",
    authDomain: "clone-6c82f.firebaseapp.com",
    projectId: "clone-6c82f",
    storageBucket: "clone-6c82f.appspot.com",
    messagingSenderId: "162614267296",
    appId: "1:162614267296:web:77dddf5f3a989b950c68c5",
    measurementId: "G-9NHLXKY258"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth= firebase.auth();

  export{db, auth};