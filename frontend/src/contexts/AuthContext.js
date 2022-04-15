// use this context to access current user anywhere in the application
import React, { useContext, useEffect, useState } from "react";
// use firebase to set the current user using the auth module created in firebase.js
import { auth } from "../firebase";

// this context will be used inside our provider
const AuthContext = React.createContext();

//function to let us use this context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

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
  };
  return (
    <AuthContext.Provider value={value}>
      {/* only render children if not loading */}
      {!loading && children}
    </AuthContext.Provider>
  );
}
