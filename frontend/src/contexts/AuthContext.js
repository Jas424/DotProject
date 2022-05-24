// use this context to access current user anywhere in the application

import React, { useContext, useEffect, useState } from "react";

import firebase, { db } from "../firebase";

// import { db } from "../firebase";

// firebase authentication module
import "firebase/compat/auth";

// for firebase storage API
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const auth = firebase.auth();

// this context will be used inside our provider
const AuthContext = React.createContext();

// function to let us use this context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  // function signup(email, password) {
  //   return auth.createUserWithEmailAndPassword(email, password);
  // }

  // function signup(email, password) {
  //   auth.createUserWithEmailAndPassword(email, password).then((cred) => {
  //     console.log(cred);
  //   });
  // }

  function signup(email, password) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setTimeout(
          () =>
            db
              .collection("users")
              .doc(user.uid)
              .set({ email, uid: user.uid, location: "" }),
          1000
        );
        console.log("ACCOUNT CREATED!");
        console.log(userCredential);
      });
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function updateProfile(photoURL) {
    return currentUser.updateProfile({ photoURL });
  }

  // FUNCTION FOR UPLOADING PROFILE PHOTO
  // get handle to storage API
  const storage = getStorage();

  async function upload(file, currentUser, setLoading) {
    // make reference to a file on firebase store database
    const fileRef = ref(storage, "profile-photos/" + currentUser.uid + ".png");

    // create a loading state for when the file is uploading
    setLoading(true);

    // use uploadBytes from firebase to grab the file and upload it in the location specified in our reference file from earlier
    await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    // update the user object's photoURL property with the new URL
    updateProfile(photoURL);

    // now that the file is uploaded, set the loading state to false and give user feedback
    setLoading(false);

    return photoURL;
  }

  // we want auth.onAuthStateChanger to only run once when we mount our component so we put it in a useEffect()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    //unsubscribe us from the onAuthStateChanged listener when we unmount it
    return unsubscribe;
  }, []);

  // {value} will store all of the info we want to provide with our authentication
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    upload,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* only render children if not loading */}
      {!loading && children}
    </AuthContext.Provider>
  );
}
