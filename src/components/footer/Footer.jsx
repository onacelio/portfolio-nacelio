import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">O Nacélio!</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">Sobre</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer_link">Contato</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://instagram.com/naceliooo" className="footer_social-icon" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://whatsapp.com" className="footer_social-icon" target="_blank">
                        <i className="bx bxl-whatsapp"></i>
                    </a>

                    <a href="https://github.com/onacelio" className="footer_social-icon" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer_copy">
                    &#169; O Nacélio
                </span>
            </div>
        </footer>
    )
}