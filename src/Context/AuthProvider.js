import React, { createContext } from 'react';

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {



    const authInfo = {

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