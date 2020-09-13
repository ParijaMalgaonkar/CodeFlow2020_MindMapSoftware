import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage';

const app=firebaseConfig.initializeApp({
    apiKey: "AIzaSyCVMFUelpTDyTLbtvvQekidLeAej5X_1X4",
    authDomain: "helloworld-94b6e.firebaseapp.com",
    databaseURL: "https://helloworld-94b6e.firebaseio.com",
    projectId: "helloworld-94b6e",
    storageBucket: "helloworld-94b6e.appspot.com",
    messagingSenderId: "202281983869",
    appId: "1:202281983869:web:1fc6bcbdc861fb39233614",
    measurementId: "G-1QLT29JP6Z"
  });
  const storage = firebase.storage()


  export default app;
  export  {
    storage, firebase as default
  }
 