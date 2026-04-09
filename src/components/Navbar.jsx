import { NavLink } from "react-router-dom";
import "../styles/header-footer.css";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">

          <span className="site-title">
            Guillermo Expósito Criminólogo
          </span>

          <nav className="nav-links">
            <button className="menu-toggle">☰</button>
            <NavLink to="/" end>
              Inicio
            </NavLink>

            <NavLink to="/servicios">
              Servicios
            </NavLink>

            <NavLink to="/sobre-mi">
              Sobre mí
            </NavLink>

            <NavLink to="/contacto">
              Contacto
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
