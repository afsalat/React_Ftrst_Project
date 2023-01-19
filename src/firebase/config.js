import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCwsg3BWGGj034SsTIXDb4NjDEiLbfD_0Q",
  authDomain: "my-first-pro-845c2.firebaseapp.com",
  projectId: "my-first-pro-845c2",
  storageBucket: "my-first-pro-845c2.appspot.com",
  messagingSenderId: "1078893268217",
  appId: "1:1078893268217:web:88312ca4085c4a062f6628",
  measurementId: "G-TRRDCKG9QY"
};

export default firebase.initializeApp(firebaseConfig)