import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext.js';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <header className="header">
            <nav className="nav">
                <Link className="nav__logo" to="/">LOGO</Link>
                <ul className="nav__menu">
                    <li><Link to="/">Home</Link></li>

                    {!user.isDoctor ? (
                        <>
                            <li><Link to="/doctors">Doctors</Link></li>
                            <li><Link to="/contacts">Contact Us</Link></li>
                        </>
                    ) : null}

                    {user.isLogged ? (
                        <>
                            {user.isDoctor ? (
                                <li><Link to="/profile-doctor">Profile Doc</Link></li>
                            ) : (
                                <li><Link to="/profile-user">Profile User</Link></li>
                            )}
                            <li><Link to="/logout">Logout</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    )}
                </ul>

                <span className="nav__contact">Contact us: 0888 321 321 </span>
            </nav>
        </header>
    )
}

export default Header; 