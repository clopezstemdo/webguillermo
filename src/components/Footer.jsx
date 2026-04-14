import "../styles/footer.css";

import instagramIcon from "../assets/icons/instagram.svg";
import tiktokIcon from "../assets/icons/tiktok.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* COLUMNA 1 - IDENTIDAD */}
        <div className="footer-col footer-brand">
          <h3>Guillermo Expósito Criminólogo</h3>
          <p>
            Asesoramiento profesional, cercano y personalizado, garantizando la
            mejor defensa de tus intereses dentro del marco legal vigente.
          </p>
        </div>

        {/* COLUMNA 2 - SERVICIOS */}
        <div className="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li>Área Penal y Criminológica</li>
            <li>Facilitación Judicial</li>
            <li>Área Penitenciaria</li>
            <li>Justicia de Menores</li>
            <li>Área de Extranjería</li>
          </ul>
        </div>

        {/* COLUMNA 3 - CONTACTO */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>
            <a href="tel:+34624969220">+34 624 96 92 20</a>
          </p>
          <p>
            <a href="mailto:guillermoexpositocriminologo@gmail.com">
              guillermoexpositocriminologo@gmail.com
            </a>
          </p>
        </div>

        {/* COLUMNA 4 - REDES */}
        <div className="footer-col footer-social">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>

      </div>

      {/* FOOTER INFERIOR */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Guillermo Expósito · Criminólogo</p>
      </div>
    </footer>
  );
}
