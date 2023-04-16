import './Footer.css';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__div footer__desc">
                <h3 className="footer__desc__title">Doctor Center</h3>
                <p className="footer__desc__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab
                    blanditiis corrupti fugiat rem
                    recusandae error ducimus quos eligendi dolor? Provident. </p>
                <div className="footer__desc__icons">
                    <span><a href="/"><i></i>Facebook</a></span>
                    <span><a href="/"><i></i></a>Instagram</span>
                    <span><a href="/"><i></i></a>Twitter</span>
                </div>
            </div>

            <div className="footer__div footer__patients">
                <h3 className="footer__petients__title">Patients</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Doctors</a></li>
                    <li><a href="/">My profile</a></li>
                </ul>
            </div>
            <div className="footer__div footer__contact">
                <div className="footer__contact__title">Contacts</div>
                <div className="footer__contact__info">
                    <p>Address: 123 Street, Sofia, Bulgaria</p>
                    <p>Phone: 0888 321 321</p>
                    <p>Email: tsvetanilievdev@gmail.com </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;