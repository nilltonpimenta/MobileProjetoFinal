import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyAwgry2CJg7tQFu9pMuf6mG93Awdv3QKLU",
    authDomain: "bancofirebase-1faf2.firebaseapp.com",
    databaseURL: "https://bancofirebase-1faf2-default-rtdb.firebaseio.com",
    projectId: "bancofirebase-1faf2",
    storageBucket: "bancofirebase-1faf2.appspot.com",
    messagingSenderId: "116249783898",
    appId: "1:116249783898:web:19f07b008b094bfc333263"
  };

  if(!firebase.apps.length){

    //abrir minha conexao
        firebase.initializeApp(firebaseConfig);
      }
    
    export default firebase
    