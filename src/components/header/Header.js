import { useState } from "react";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);


    return (

        <header id="header">
            <nav>
                <div id="header_top">
                    <h1>Медицински Център "Super Doc"</h1>
                    {isMobile ? (
                        <div id="header_menu">
                            <ul class="menu_mobile">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Procedures</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Login</a></li>
                                <li><a href="/">Register</a></li>
                                <li><a href="/">Logout</a></li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <ul class="menu_big">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Procedures</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Login</a></li>
                                <li><a href="/">Register</a></li>
                                <li><a href="/">Logout</a></li>
                            </ul>
                            <button id="toggle_menu">&#9776;</button>
                        </>
                    )}
                </div>

            </nav>
        </header>

    )
}

export default Header;