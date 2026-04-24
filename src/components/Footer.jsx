import "../styles/footer.css";

import instagramIcon from "../assets/icons/instagram.svg";
import tiktokIcon from "../assets/icons/tiktok.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";


import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* IZQUIERDA */}
        <div className="footer-brand">
          <h3>Guillermo Expósito Criminólogo</h3>
          <p>
            Asesoramiento profesional, cercano y personalizado, garantizando la
            mejor defensa de tus intereses dentro del marco legal vigente.
          </p>
        </div>

        {/* CENTRO */}
        <div className="footer-services">
          <h4>Servicios</h4>

          <ul className="footer-services-list">
            <li>
              <Link to="/servicios#penal">Área Penal y Criminológica</Link>
            </li>
            <li>
              <Link to="/servicios#facilitacion">Facilitación Judicial</Link>
            </li>
            <li>
              <Link to="/servicios#penitenciaria">Área Penitenciaria</Link>
            </li>
            <li>
              <Link to="/servicios#menores">Justicia de Menores</Link>
            </li>
            <li>
              <Link to="/servicios#extranjeria">Área de Extranjería</Link>
            </li>
          </ul>
        </div>

        {/* DERECHA */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>
            <a href="https://wa.me/34624969220"
              target="_blank"
              rel="noreferrer"
              aria-label="Contactar por WhatsApp con Guillermo Expósito"
            >
              +34 624 96 92 20
            </a><br />
            <a href="mailto:guillermoexpositocriminologo@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Contactar por Gmail con Guillermo Expósito"
            >
              guillermoexpositocriminologo@gmail.com
            </a>
          </p>


          <div className="footer-social">
            <a href="https://www.instagram.com/guillermoexpositocriminologo/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram de Guillermo Expósito"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@guillermocriminologo" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Tiktok de Guillermo Expósito"
            >
              <img src={tiktokIcon} alt="TikTok" />
            </a>
            <a href="https://www.linkedin.com/in/guillermo-expósito-criminólogo" 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn de Guillermo Expósito"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>

          {/* ENLACES LEGALES */}
          {/* <div className="footer-legal">
            <Link to="/avisolegal">Aviso legal</Link>
          </div> */}

        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-grid">

          <div className="footer-bottom-left">
            © {new Date().getFullYear()} Guillermo Expósito · Criminólogo
          </div>

          <div className="footer-bottom-center">
            <Link to="/avisolegal">Aviso legal</Link>
            <span className="footer-separator">|</span>
            <Link to="/politicaprivacidad">Política de privacidad</Link>
          </div>

          <div className="footer-bottom-right">
            {/* vacío a propósito para mantener el grid */}
          </div>

        </div>
      </div>

    </footer>
  );
}