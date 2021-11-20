import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyC1wNKbqj7I4lZM8TdezIKk4mapi2smyig",
    authDomain: "crown-db-4d4cd.firebaseapp.com",
    projectId: "crown-db-4d4cd",
    storageBucket: "crown-db-4d4cd.appspot.com",
    messagingSenderId: "467761102560",
    appId: "1:467761102560:web:b60fb9cd8595c4c3bb5a85",
    measurementId: "G-WMBL5W6LHQ"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
