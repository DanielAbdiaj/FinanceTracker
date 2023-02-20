import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBEO0YfVqgH3MKWNxNCRCwSTt1y0oUdABA",
    authDomain: "mymoney-1a594.firebaseapp.com",
    projectId: "mymoney-1a594",
    storageBucket: "mymoney-1a594.appspot.com",
    messagingSenderId: "713281658632",
    appId: "1:713281658632:web:092a003c633658684d96bd"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }