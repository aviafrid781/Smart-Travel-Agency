import { initializeApp } from "firebase/app";
import firebaseConfig from '../firebase/firebase.config'
const initializedAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default initializedAuthentication;