import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { logout } from "../../../services/userService.js";
import AuthContext from "../../../context/AuthContext.js";
import { deleteToken } from "../../../services/storageService.js";

const Logout = () => {
    const { user, updateUser } = useContext(AuthContext);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    useEffect(() => {
        logout().then(m => {
            console.log(m);
            updateUser({ isLogged: false });
            deleteToken();
            setIsLoggedOut(true);
        }).catch(e => {
            console.log(e);
            setIsLoggedOut(false);
        })
    }, [])

    return (
        isLoggedOut ? <Navigate to="/login" /> : <h1>Logging out...</h1>
    )
}

export default Logout;