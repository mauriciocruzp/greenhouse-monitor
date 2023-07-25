const config = {
    apiKey: import.meta.env.FIREBASE_API_KEY,
    authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.FIREBASE_DB_URL,
    projectId: import.meta.env.PROJECT_ID,
    storageBucket: import.meta.env.STORAGE_BUCKET,
    messagingSenderId: import.meta.env.MESSAGING_SENSER_ID,
    appId: import.meta.env.APP_ID,
    measurementId: import.meta.env.MEASUREMENT_ID,
};

export default config;