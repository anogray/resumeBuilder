import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCYQyHSNA_BksE_XtGmhYkPz8ZiLrl4uPo",
    authDomain: "resume-builder-ad435.firebaseapp.com",
    databaseURL: "https://resume-builder-ad435.firebaseio.com",
    projectId: "resume-builder-ad435",
    storageBucket: "resume-builder-ad435.appspot.com",
    messagingSenderId: "515774184282",
    appId: "1:515774184282:web:c3fc1234a52900eb731163"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;
