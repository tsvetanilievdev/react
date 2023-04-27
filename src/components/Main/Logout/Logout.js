import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { logout } from "../../../services/patientsService.js";
import AuthContext from "../../../context/AuthContext.js";
import { deleteToken } from "../../../services/storageService.js";

const Logout = () => {
    // eslint-disable-next-line no-unused-vars
    const { profile, updateProfile } = useContext(AuthContext);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    useEffect(() => {
        logout().then(m => {
            console.log(m);
            updateProfile({ isLogged: false });
            deleteToken();
            setIsLoggedOut(true);
        }).catch(e => {
            console.log(e);
            setIsLoggedOut(false);
        })
    }, [updateProfile])

    return (
        isLoggedOut ? <Navigate to="/login" /> : <h1>Logging out...</h1>
    )
}

export default Logout;