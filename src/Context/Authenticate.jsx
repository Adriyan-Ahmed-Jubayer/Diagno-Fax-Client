import { createContext } from "react";
import auth from "../Firebase/firebase.config"
import { createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);
const Authenticate = ({children}) => {
    const CreateAccount = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const AuthMethods = {
        CreateAccount,
    }
    return (
        <AuthContext.Provider value={AuthMethods}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authenticate;