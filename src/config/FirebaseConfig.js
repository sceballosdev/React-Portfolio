import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAv96P1Lf3KX2c_WZMyOoPx4xurJJy0ak0",
    authDomain: "stevenceballos-webpage-ddcff.firebaseapp.com",
    databaseURL: "https://stevenceballos-webpage-ddcff.firebaseio.com",
    projectId: "stevenceballos-webpage-ddcff",
    storageBucket: "stevenceballos-webpage-ddcff.appspot.com",
    messagingSenderId: "984738640918",
    appId: "1:984738640918:web:7dd720dc8e6eafb1"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
