// use this context to access current user anywhere in the application

import React, { useContext, useEffect, useState } from "react";

// use firebase to set the current user using the auth module created in firebase.js
import { auth } from "../firebase";

// for firebase storage API
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";

// this context will be used inside our provider
const AuthContext = React.createContext();

//function to let us use this context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //get handle to storage API
  const storage = getStorage();

  function signup(email, password) {
    // return a promise to use inside of the actual signup form and return an error message or redirect user to the correct page
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function updateProfile(currentUser, { photoURL }) {
    return currentUser.updateProfile(currentUser);
  }

  //FUNCTION FOR UPLOADING PROFILE PHOTO
  async function photoUpload(file, currentUser, setLoading) {
    //make reference to a file on firebase store database
    const fileRef = ref(storage, "profile-photos/" + currentUser.uid + ".png");

    //create a loading state for when the file is uploading
    setLoading(true);

    //use uploadBytes from firebase to grab the file and upload it in the location specified in our reference file from earlier
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    //update the profile photo
    // updateProfile(currentUser, { photoURL });
    currentUser.updateProfile({ photoURL: { photoURL } });

    // now that the file is uploaded, set the loading state to false and give user feedback
    setLoading(false);
    alert("FILE UPLOADED!");
  }

  // we want auth.onAuthStateChanger to only run once when we mount our component so we put it in a useEffect()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    // unsubscribe us from the onAuthStateChanged listener when we unmount it
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
    photoUpload,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* only render children if not loading */}
      {!loading && children}
    </AuthContext.Provider>
  );
}
