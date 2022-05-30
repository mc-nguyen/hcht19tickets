import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRaXW6Q-VzOw49Qf5X1Z4kvmoOhfiLU0w",
    authDomain: "banvehcht19.firebaseapp.com",
    projectId: "banvehcht19",
    storageBucket: "banvehcht19.appspot.com",
    messagingSenderId: "771243862354",
    appId: "1:771243862354:web:401a357571bc46dba7f28b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;