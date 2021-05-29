import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDIlPHzrV1A6LzD3LJFKKGm-LinmPg89Ig",
    authDomain: "make-love-f09b0.firebaseapp.com",
    projectId: "make-love-f09b0",
    storageBucket: "make-love-f09b0.appspot.com",
    messagingSenderId: "146717446990",
    appId: "1:146717446990:web:843575fcae51aa7ce0c41f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };