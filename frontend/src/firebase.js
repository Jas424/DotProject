/* this component contains a mapping of our environmental variables so if any of the actual values change  */

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import { getFirestore } from "firebase/firestore";

//store firebase config values. using values from .env.local file
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASEMESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

//initialize firebase
const app = firebase.initializeApp(firebaseConfig);

// export const db = getFirestore(app);
export const db = firebase.firestore();

export default app;
