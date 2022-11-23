import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtz5J2ABwmrX4EhVFOG7LksTBMczPJAVk",
  authDomain: "phone-hunters.firebaseapp.com",
  projectId: "phone-hunters",
  storageBucket: "phone-hunters.appspot.com",
  messagingSenderId: "54452813045",
  appId: "1:54452813045:web:fd95c5caa0edc5be7ed9bc"
};
// console.log(process.env.REACT_APP_apiKey);
const app = initializeApp(firebaseConfig);
export default app;