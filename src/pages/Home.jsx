import "../styles/home.css";

import heroImage from "../assets/hero-image.jpg";

import tiktokIcon from "../assets/tiktok.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import mazoIcon from "../assets/icons/mazo.svg";
import escudoIcon from "../assets/icons/escudo.svg";
import papelesIcon from "../assets/icons/papeles.svg";
import avatarIcon from "../assets/icons/avatar.svg";


export default function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll(".animar-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // solo una vez
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">

            {/* COLUMNA TEXTO */}
            <div className="hero-text-block animar-scroll from-bottom">
              <span className="hero-tag">
                ⚖️ Asesoría en Criminología y Derecho Penal
              </span>

              <h1 className="hero-title">
                La sentencia de un juicio no solo depende de las leyes, sino de cómo se
                argumenta la verdad.
              </h1>

              <p className="hero-text">
                Como criminólogo especializado en el ámbito penal, ofrezco un enfoque
                integral que combina el análisis criminológico con la defensa jurídica.
              </p>

              <div className="hero-buttons">
                <div className="hero-btn-wrap animar-btn">
                  <NavLink to="/contacto" className="btn-primary">
                    Consulta gratuita
                  </NavLink>
                </div>
                <div className="hero-btn-wrap animar-btn delay-2">
                  <NavLink to="/servicios" className="btn-secondary">
                    Ver servicios
                  </NavLink>
                </div>
              </div>
            </div>

            {/* COLUMNA IMAGEN */}
            <div className="hero-image-wrapper animar-scroll from-bottom">
              <img src={heroImage} alt="Imagen representativa criminología" />
            </div>

          </div>
        </div>
      </section>

      {/*
       <section className="home-statement">
        <div className="container">
          <p>
            La sentencia de un juicio no solo depende de las leyes, sino de cómo se
            argumenta la verdad. 
          </p>
        </div>
      </section>
      

      <section className="home-statement2">
        <div className="container">
          <p>
            Como criminólogo, te ayudo a analizar las variables de tu caso, preparar cada una de las intervenciones de manera sólida y gestionar la información de forma estratégica para que tengas el control en cualquier procedimiento. 
          </p>
        </div>
      </section>

      
       */}


      <section className="experience-section">
        <div className="container experience-layout">

          {/* COLUMNA IZQUIERDA */}
          <div className="experience-text animar-scroll from-left">
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
          <div className="experience-cards animar-scroll from-right">

            <div className="service-card">
              <div className="service-icon">
                <img src={mazoIcon} alt="Asesoría penal" />
              </div>
              <h4>Asesoría penal</h4>
              <p>Asesoramiento en todas las fases del proceso penal.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={escudoIcon} alt="Criminología" />
              </div>
              <h4>Criminología</h4>
              <p>Análisis científico del comportamiento delictivo.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={papelesIcon} alt="Informes periciales" />
              </div>
              <h4>Informes periciales</h4>
              <p>Elaboración de informes criminológicos especializados.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={avatarIcon} alt="Asesoramiento" />
              </div>
              <h4>Asesoramiento</h4>
              <p>Orientación jurídica preventiva y consultiva.</p>
            </div>

          </div>

        </div>
      </section>

      <section className="social-section">
        <h2 className="animar-scroll from-bottom">Mis Publicaciones</h2>

        <p className="social-description animar-scroll from-bottom">
          Sígueme en redes sociales para mantenerte actualizado sobre temas
          de criminología, derecho penal, casos de interés y análisis jurídico.
        </p>

        <div className="social-grid animar-scroll from-bottom">

          <div className="social-card">

            <a
              href="https://www.tiktok.com/@guillermocriminologo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
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
              className="social-link"
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
              className="social-link"
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
