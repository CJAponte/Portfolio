import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyDlBK26LouGYIaW2msJaJNg5EMk26QV8gc",
    authDomain: "portfoliodb-2f92f.firebaseapp.com",
    databaseURL: "https://portfoliodb-2f92f.firebaseio.com",
    projectId: "portfoliodb-2f92f",
    storageBucket: "portfoliodb-2f92f.appspot.com",
    messagingSenderId: "306612977663",
    appId: "1:306612977663:web:2a661d3881abcfd914f1ca",
    measurementId: "G-5E8K56T05J"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase