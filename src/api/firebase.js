import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCRWLGLgA6l13Dosk01BNXlpyCRCUJi_OE",
    authDomain: "sistemas-d4fb0.firebaseapp.com",
    databaseURL: "https://sistemas-d4fb0-default-rtdb.firebaseio.com",
    projectId: "sistemas-d4fb0",
    storageBucket: "sistemas-d4fb0.appspot.com",
    messagingSenderId: "844948877282",
    appId: "1:844948877282:web:bc9567a7723ea4fbca53bb",
    measurementId: "G-RJ2JK9D1NH"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;