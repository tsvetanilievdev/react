import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext.js';

const Header = () => {
    const { profile } = useContext(AuthContext);
    return (
        <header className="header">
            <nav className="nav">
                <Link className="nav__logo" to="/">LOGO</Link>
                <ul className="nav__menu">
                    <li><Link to="/">Home</Link></li>

                    {!profile.isDoctor ? (
                        <>
                            <li><Link to="/doctors">Doctors</Link></li>
                            <li><Link to="/contacts">Contact Us</Link></li>
                        </>
                    ) : null}

                    {profile.isLogged ? (
                        <>
                            {profile.isDoctor ? (
                                <li><Link to="/profile-doctor">Profile Doctor</Link></li>
                            ) : (
                                <li><Link to="/profile-patient">Profile Patient</Link></li>
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