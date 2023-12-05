
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB4awZBpN8bfIpBVltN49UmMTEQGXrpL_c",
    authDomain: "eccomerce-react-19d4f.firebaseapp.com",
    projectId: "eccomerce-react-19d4f",
    storageBucket: "eccomerce-react-19d4f.appspot.com",
    messagingSenderId: "414921505069",
    appId: "1:414921505069:web:7ee82e0ac7e98106543ba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)