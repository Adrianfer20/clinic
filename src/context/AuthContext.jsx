/* eslint-disable react/prop-types */
import { auth } from "../firebase/firebase.config.js";
import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) return console.log("No creaste el context");
  else return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("No hay usuario suscrito");
        setUser(false);
      } else setUser(currentUser);
      return () => suscribed();
    });
  }, []);

  const register = async (email, password) => {
    try {
      console.log(email, password);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      return console.error("Ah surgido un error: " + error);
    }
  };
  const login = async (email, password) => {
    try {
    await signInWithEmailAndPassword(auth, email, password);
    return {
      success: true
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
  };
  const loginWithGoogle = async () => {
    const response = new GoogleAuthProvider();
    return await signInWithPopup(auth, response);
  };
  const logout = async () => {
    const response = await signOut(auth);
    return response;
  };
  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
