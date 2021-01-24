import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCxyZ0WtJmABrBO6CAVrISa4QIah426CNE",
    authDomain: "clone-bcf38.firebaseapp.com",
    databaseURL: "https://clone-bcf38.firebaseio.com",
    projectId: "clone-bcf38",
    storageBucket: "clone-bcf38.appspot.com",
    messagingSenderId: "11255411482",
    appId: "1:11255411482:web:0f0ae2258861f671aff2a3"
};

//to initialize the firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore(); //for the Cloud Databse
const auth = firebase.auth();       //for the authentication  

export {db, auth}