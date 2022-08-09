import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyCx470ikTszHtAyZyn3Wbkk-pL9tfjLuwc",
  authDomain: "emrota-f64ef.firebaseapp.com",
  projectId: "emrota-f64ef",
  storageBucket: "emrota-f64ef.appspot.com",
  messagingSenderId: "1033665956226",
  appId: "1:1033665956226:web:39f93deb5a4361e2b2679b"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;