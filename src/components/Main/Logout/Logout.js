import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { logout } from "../../../services/userService.js";

const Logout = () => {

    const [isLoggedOut, setIsLoggedOut] = useState(false);

    useEffect(() => {
        logout().then(m => {
            console.log(m);
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