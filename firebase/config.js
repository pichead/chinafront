import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyCZrdTbsBoHY1TPfPe0myZpCt-kEj-Wey8",
        authDomain: "shob-ship.firebaseapp.com",
        projectId: "shob-ship",
        storageBucket: "shob-ship.appspot.com",
        messagingSenderId: "223066964044",
        appId: "1:223066964044:web:5dbf5ca3a4765fb63a34e9",
        measurementId: "G-Z0MK8SEECT"
    };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const storage = firebase.storage();


export { projectAuth,projectFirestore, timestamp,storage }