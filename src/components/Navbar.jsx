import { NavLink } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logoGuillermo.svg"
import fotoGuillermo from "../assets/Guillermo.webp"
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

          {menuOpen && (
            <div
              className="menu-overlay"
              onClick={() => setMenuOpen(false)}
            />
          )}


          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            
            <div className="mobile-menu-header">
              
              <div className="mobile-profile">
                  <img
                    src={fotoGuillermo}   // o una imagen específica de perfil
                    alt="Guillermo Expósito"
                    className="mobile-avatar"
                  />
                  <div className="mobile-profile-text">
                    <span className="mobile-name">Guillermo Expósito Criminólogo</span>
                  </div>
              </div>


              <button
                className="close-menu"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            <div className="mobile-menu-body">

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
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
