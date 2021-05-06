import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firebase-firestore'



var firebaseConfig = {
    apiKey: "AIzaSyB-2YflN3A_2qGMb4NEnJGVOCiIhXqw5Dk",
    authDomain: "chat-8588e.firebaseapp.com",
    projectId: "chat-8588e",
    storageBucket: "chat-8588e.appspot.com",
    messagingSenderId: "571042390784",
    appId: "1:571042390784:web:81f67e9605dbe111bfc9e5",
    measurementId: "G-JBQZ97QRTK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   export const auth= firebase.auth();
  export const firestore=firebase.firestore();

