import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5QY3HjkOujoFPUP8cfg3Fr2G3aw7DJRY",
  authDomain: "whatsapp-2-2cc08.firebaseapp.com",
  projectId: "whatsapp-2-2cc08",
  storageBucket: "whatsapp-2-2cc08.appspot.com",
  messagingSenderId: "492137286397",
  appId: "1:492137286397:web:f5375bc11dc91c2f448c94",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
