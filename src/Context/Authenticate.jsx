import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config.js"


export const AuthContext = createContext(null);
const Authenticate = ({ children }) => {
    const [User, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const CreateAccount = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const GoogleLogin = () => {
        const GGLProvider = new GoogleAuthProvider
        return signInWithPopup(auth, GGLProvider)
    }
    const LoginAccount = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const LogOutAccount = () => {
        setIsLoading(true)

        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, userAccount => {
            setUser(userAccount)
            setIsLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const AuthMethods = {
        User,
        CreateAccount,
        GoogleLogin,
        LoginAccount,
        LogOutAccount,
    }
    return (
        <AuthContext.Provider value={AuthMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authenticate;