import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAQALygVvXMWi2HWu_QkRGG3iWCn9xGAlM",
  authDomain: "e-trgovina-1b030.firebaseapp.com",
  databaseURL: "https://e-trgovina-1b030.firebaseio.com",
  projectId: "e-trgovina-1b030",
  storageBucket: "e-trgovina-1b030.appspot.com",
  messagingSenderId: "587786915512",
  appId: "1:587786915512:web:df1f3460450c778ac86e4d",
  measurementId: "G-PHH1ESL56J",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
