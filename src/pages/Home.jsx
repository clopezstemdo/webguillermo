import "../styles/home.css";

import tiktokIcon from "../assets/tiktok.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import { NavLink } from "react-router-dom";


export default function Home() {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          ⚖️ Criminología y Derecho Penal
        </span>

        <h1 className="hero-title">
          Asesoría Jurídica Especializada en Derecho Penal
        </h1>

        <p className="hero-text">
          Asesoramiento legal especializado con enfoque criminológico.
          Protegemos tus derechos con experiencia, rigor profesional
          y un profundo conocimiento del sistema penal.
        </p>

        
        <div className="hero-buttons">
          <NavLink to="/contacto" className="btn-primary">
            Consulta gratuita
          </NavLink>

          <NavLink to="/servicios" className="btn-secondary">
            Ver servicios
          </NavLink>
        </div>

      </div>
    </section>

    <section className="experience-section">
      <div className="experience-layout">

        {/* COLUMNA IZQUIERDA */}
        <div className="experience-text">
      <h2>Experiencia en Criminología y Derecho Penal</h2>

      <p>
        Como criminólogo especializado en el ámbito penal, ofrezco un
        enfoque integral que combina el análisis criminológico con la
        defensa jurídica. Mi formación me permite comprender no solo
        los aspectos legales, sino también los factores criminológicos
        que intervienen en cada caso.
      </p>

      <p>
        Mi compromiso es brindar asesoramiento profesional, cercano y
        personalizado, garantizando la mejor defensa de tus intereses
        dentro del marco legal vigente.
      </p>

      <ul className="experience-list">
        <li>Análisis criminológico del caso.</li>
        <li>Defensa personalizada y estratégica.</li>
        <li>Acompañamiento en todo el proceso judicial.</li>
      </ul>
    </div>

    {/* COLUMNA DERECHA */}
    <div className="experience-cards">
      <div className="service-card">
        <h4>Asesoría penal</h4>
        <p>Asesoramiento en todas las fases del proceso penal.</p>
      </div>

      <div className="service-card">
        <h4>Criminología</h4>
        <p>Análisis científico del comportamiento delictivo.</p>
      </div>

      <div className="service-card">
        <h4>Informes periciales</h4>
        <p>Elaboración de informes criminológicos especializados.</p>
      </div>

      <div className="service-card">
        <h4>Asesoramiento</h4>
        <p>Orientación jurídica preventiva y consultiva.</p>
      </div>
    </div>

  </div>
</section>

<section className="social-section">     
  <h2>Mis Publicaciones</h2>

  <p className="social-description">
    Sígueme en redes sociales para mantenerte actualizado sobre temas
    de criminología, derecho penal, casos de interés y análisis jurídico.
  </p>

  <div className="social-grid">

    <div className="social-card">
      
<a
  href="https://www.tiktok.com/@guillermocriminologo"
  target="_blank"
  rel="noopener noreferrer"
  className="social-card"
>
  <div className="social-icon">
    <img src={tiktokIcon} alt="TikTok" />
  </div>
  <span>TikTok</span>
</a>

    </div>

    <div className="social-card">
      <a
  href="https://www.instagram.com/guillermoexpositocriminologo/"
  target="_blank"
  rel="noopener noreferrer"
  className="social-card"
>
  <div className="social-icon">
    <img src={instagramIcon} alt="Instagram" />
  </div>
  <span>Instagram</span>
</a>
    </div>

    <div className="social-card">
      <a
  href="https://www.linkedin.com/in/guillermo-expósito-criminólogo"
  target="_blank"
  rel="noopener noreferrer"
  className="social-card"
>
  <div className="social-icon">
    <img src={linkedinIcon} alt="LinkedIn" />
  </div>
  <span>LinkedIn</span>
</a>
    </div>

  </div>
</section>


    </>
  );
}
``