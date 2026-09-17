import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu after clicking a link
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            <h2 className="logo">Anju Sambasivan</h2>

            {/* Mobile hamburger button */}
            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open navigation menu"
            >
                ☰
            </button>

            <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#experience" onClick={closeMenu}>Experience</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>

                <a
                    href="/ANJU_SAMBASIVAN_CV_Data_Analytics_09_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-button"
                    onClick={closeMenu}
                >
                    CV
                </a>
            </div>

        </nav>
    );
}

export default Navbar;