import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxzCB734bqKTnlpfkJF34elNbD9Bj5jDM",
  authDomain: "ai-resume-maker.firebaseapp.com",
  projectId: "ai-resume-maker",
  storageBucket: "ai-resume-maker.appspot.com",
  messagingSenderId: "280163200698",
  appId: "1:280163200698:web:3ab5218a7b1f7916b89c83",
  measurementId: "G-7YHK6X3ZV3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
// Initialize Firebase
