import React, { createContext, useContext } from 'react';
import { APP_PREFIX } from '../config';
import useSecuredLocalStorage from '../hooks/useSecuredStorage';

// Create the Authentication Context
const AuthContext = createContext();

// AuthProvider component that will wrap your app and provide authentication context
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useSecuredLocalStorage(APP_PREFIX + '@authToken', null);

    // Define functions for authentication actions (login, logout, check if authenticated, etc.)
    const login = ({ token, userInfo }) => setAuth({ token, userInfo });
    const logout = () => setAuth(null);
    const isAuthenticated = () => !!auth?.token;

    // Expose the context values
    const contextValue = {
        token: auth?.token,
        authInfo:auth,
        login,
        logout,
        isAuthenticated,
    };



    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Custom hook to use the authentication context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
