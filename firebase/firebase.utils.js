import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7BxojsUbgQopfKKrk-f8FhuD8_77bdBQ",
    authDomain: "paaterminal.firebaseapp.com",
    databaseURL: "https://paaterminal.firebaseio.com",
    projectId: "paaterminal",
    storageBucket: "paaterminal.appspot.com",
    messagingSenderId: "805815954367",
    appId: "1:805815954367:web:dd514b7123a822ed680f0a",
    measurementId: "G-2PV99Z2TWR"
  };

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;