import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import config from "../config.js";

const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
