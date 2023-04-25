import { createContext, useState } from "react";
import { getToken } from "../services/storageService.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = getToken();
    const [user, setUser] = useState({
        isLogged: token.isAuthenticated,
        isDoctor: false,
        email: token.email || '',
        name: token.name || '',
    })



    const updateUser = (data) => setUser(data);
    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;