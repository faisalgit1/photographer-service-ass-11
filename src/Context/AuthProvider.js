import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase-config'
import { createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth'

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    // User Data
    const [user, setuser] = useState(null)

    // Reload 
    const [loading, setLoading] = useState(true)

    // Providers


    // Sign up 
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // Log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        signUp,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;