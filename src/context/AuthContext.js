import { createContext, useState } from "react";
import { getToken } from "../services/storageService.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = getToken();
    const [profile, setProfile] = useState({
        isLogged: token.isAuthenticated,
        isDoctor: false,
        email: token.email || '',
        name: token.name || '',
    })



    const updateProfile = (data) => setProfile(data);
    return (
        <AuthContext.Provider value={{ profile, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;