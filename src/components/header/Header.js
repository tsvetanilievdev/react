import './Header.css'

const Header = () => {
    const isAdmin = true;
    const isLogged = true;
    return (
        <header className="header">
            <nav className="nav">
                <a className="nav__logo" href="/logo">LOGO</a>
                <ul className="nav__menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Doctors</a></li>
                    <li><a href="/">Contact Us</a></li>

                    {isLogged ? (
                        <>
                            <li><a href="/">My profile</a></li>
                            <li><a href="/">Logout</a></li>
                            {isAdmin ? (
                                <li><a href="/">Admin</a></li>
                            ) : null}
                        </>
                    ) : (
                        <>
                            <li><a href="/">Register</a></li>
                            <li><a href="/">Login</a></li>
                        </>
                    )}
                </ul>

                <span className="nav__contact">Contact us: 0888 321 321 </span>
            </nav>
        </header>
    )
}

export default Header; 