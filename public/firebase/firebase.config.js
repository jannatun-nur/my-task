// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJI8mtjV-wHMuEnLoJCDSv_wCAl33Qv4U",
  authDomain: "my-task-f470f.firebaseapp.com",
  projectId: "my-task-f470f",
  storageBucket: "my-task-f470f.appspot.com",
  messagingSenderId: "22949764860",
  appId: "1:22949764860:web:5822146c1353d7ea0d8179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app