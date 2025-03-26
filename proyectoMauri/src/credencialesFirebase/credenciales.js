// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3U9p-yNePzICdEWdeFmyluNR4HlhO6sk",
  authDomain: "motors-142f7.firebaseapp.com",
  projectId: "motors-142f7",
  storageBucket: "motors-142f7.firebasestorage.app",
  messagingSenderId: "749261652983",
  appId: "1:749261652983:web:15ba2dc7884695a64e64f2"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);

export default appFireBase