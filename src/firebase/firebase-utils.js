import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKbbQ72x5k4VfXISZWGKZ5B1UrsH5OcLc",
    authDomain: "ecommerce-project-b369a.firebaseapp.com",
    databaseURL: "https://ecommerce-project-b369a.firebaseio.com",
    projectId: "ecommerce-project-b369a",
    storageBucket: "ecommerce-project-b369a.appspot.com",
    messagingSenderId: "806004625564",
    appId: "1:806004625564:web:a1f790b0ea0c4b5c425d59",
    measurementId: "G-LSSTCZD33D"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set( {
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch(e) {
            console.log(e.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


// Firebase DB store
export default firebase;