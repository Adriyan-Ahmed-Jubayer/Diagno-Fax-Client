import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/firebase.config.js"


export const AuthContext = createContext(null);
const Authenticate = ({ children }) => {
    const [User, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const CreateAccount = (email, password) => {
        setIsLoading(true);
        console.log(User);
        return createUserWithEmailAndPassword(auth, email, password);
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
    }
    return (
        <AuthContext.Provider value={AuthMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authenticate;