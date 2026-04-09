import { NavLink } from "react-router-dom";
import "../styles/header-footer.css";
import logo from "../assets/logoGuillermo.svg"
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">

          <span className="site-title">
            Guillermo Expósito Criminólogo
          </span>

          <button className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menú">☰</button>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            
            <div className="mobile-menu-header">
              
              <img
                src={logo}
                alt="Guillermo Expósito Criminólogo"
                className="mobile-logo"
              />

              <button
                className="close-menu"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Inicio
            </NavLink>

            <NavLink to="/servicios" onClick={() => setMenuOpen(false)}>
              Servicios
            </NavLink>

            <NavLink to="/sobre-mi" onClick={() => setMenuOpen(false)}>
              Sobre mí
            </NavLink>

            <NavLink to="/contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
