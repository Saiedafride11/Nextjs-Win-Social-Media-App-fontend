import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./firebase.config";

const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

export default Auth;
