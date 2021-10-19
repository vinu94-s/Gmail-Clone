
import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7Np4G59SUhfrGihMRH1iIYY6tVlCzkro",
    authDomain: "mail-clone-69020.firebaseapp.com",
    projectId: "mail-clone-69020",
    storageBucket: "mail-clone-69020.appspot.com",
    messagingSenderId: "124295756043",
    appId: "1:124295756043:web:3b890717c9fcc2a41f0a0e",
    measurementId: "G-TDHK31ME6C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db
