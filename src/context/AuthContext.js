import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLogged: false,
        email: '',
        name: '',
    })

    const updateUser = (data) => setUser(data);
    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;