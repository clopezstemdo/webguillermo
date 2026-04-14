import "../styles/footer.css";

import instagramIcon from "../assets/icons/instagram.svg";
import tiktokIcon from "../assets/icons/tiktok.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

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
          
            <div className="footer-services-grid">
              <ul>
                <li>Área Penal y Criminológica</li>
                <li>Facilitación Judicial</li>
              </ul>
              <ul>
                <li>Justicia de Menores</li>
                <li>Área de Extranjería</li>
              </ul>
            </div>

            <ul className="footer-services-center">
              <li>Área Penitenciaria</li>
            </ul>

        </div>

        {/* DERECHA */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>
            <a href="tel:+34624969220">+34 624 96 92 20</a><br />
            <a href="mailto:guillermoexpositocriminologo@gmail.com">
              guillermoexpositocriminologo@gmail.com
            </a>
          </p>

          <div className="footer-social">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
              <img src={tiktokIcon} alt="TikTok" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Guillermo Expósito · Criminólogo</p>
      </div>
    </footer>
  );
}
``