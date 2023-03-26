import { useState } from "react"
import "./Header.css"

export default function Header() {

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header")

        if(window.scrollY >= 80)
            header.classList.add("scroll-header");
        else
            header.classList.remove("scroll-header");
    })

    const[showMenu, setShowMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" target="_blank" rel="noopener noreferrer" className="nav_logo">O Nacélio!</a>

                <div className={showMenu ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-estate nav_icon"></i> Principal
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-user nav_icon"></i> Sobre
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-file-alt nav_icon"></i> Habilidades
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-scenery nav_icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}>
                                <i className="uil uil-message nav_icon"></i> Contato 
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => setShowMenu(!showMenu)}></i>
                </div>

                <div className="nav_toggle" onClick={() => setShowMenu(!showMenu)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}