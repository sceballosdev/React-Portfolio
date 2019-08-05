import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBihtVJrhHdgGXLpRrTkuPYOcLxNulB4ss",
    authDomain: "landingpage-d6d60.firebaseapp.com",
    databaseURL: "https://landingpage-d6d60.firebaseio.com",
    projectId: "landingpage-d6d60",
    storageBucket: "landingpage-d6d60.appspot.com",
    messagingSenderId: "636291141643",
    appId: "1:636291141643:web:0a9036631cd525b0"
};
firebase.initializeApp(config);
<<<<<<< HEAD
firebase.firestore().settings({ timestampsInSnapshots: true });
=======
>>>>>>> f2c528ca2e8569d7fa21fca6d90b9aeca9adc260

export default firebase;