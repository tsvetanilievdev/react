import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const isAdmin = false;
    const isLogged = false;
    return (
        <header className="header">
            <nav className="nav">
                <Link className="nav__logo" to="/logo">LOGO</Link>
                <ul className="nav__menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/doctors">Doctors</Link></li>
                    <li><Link to="/contacts">Contact Us</Link></li>

                    {isLogged ? (
                        <>
                            <li><Link to="/my-profile">My profile</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                            {isAdmin ? (
                                <li><Link to="/admin">Admin</Link></li>
                            ) : null}
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