import "../styles/home.css";

import heroImage from "../assets/hero-image.jpg";
import tiktokIcon from "../assets/tiktok.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import mazoIcon from "../assets/icons/mazo.svg";
import escudoIcon from "../assets/icons/escudo.svg";
import papelesIcon from "../assets/icons/papeles.svg";
import avatarIcon from "../assets/icons/avatar.svg";

export default function Home() {
  const location = useLocation();
  const [heroVisible, setHeroVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);

  // useEffect(() => {
    
  //   setHomeVisible(true);
  // },[]);
  

// ANIMACON SECCION HERO  
  useEffect(() => {
    setHeroVisible(false);

    requestAnimationFrame(() => {
      setHeroVisible(true);
    });
  }, [location.pathname]);

// ANIMACON SECCION EXPERIENCE

  useEffect(() => {
    const onScroll = () => {
      const experience = document.querySelector(".experience-section");

      if (!experience || experienceVisible) return;

      const rect = experience.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.85) {
        setExperienceVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // por si ya está visible

    return () => window.removeEventListener("scroll", onScroll);
  }, [experienceVisible]);

// ANIMACON SECCION SOCIAL

  useEffect(() => {
    const onScroll = () => {
      const social = document.querySelector(".social-section");

      if (!social || socialVisible) return;

      const rect = social.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.85) {
        setSocialVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [socialVisible]);


  // useEffect(() => {
  //   const heroEls = document.querySelectorAll(".hero .animar-scroll");

  //   // Fuerza el cambio de estado en el siguiente frame
  //   requestAnimationFrame(() => {
  //     heroEls.forEach(el => el.classList.add("visible"));
  //   });
  // }, []);


  // useEffect(() => {
  //   const elements = document.querySelectorAll(".animar-scroll");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("visible");
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { 
  //       threshold: 0.1,
  //       rootMargin: "0px 0px -10% 0px"
  //     }
  //   );

  //   elements.forEach((el) => {
  //     if(!el.closest(".hero")){
  //       observer.observe(el);
  //     }
  //   });

  //   return () => observer.disconnect();
  // }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          {/* TEXTO HERO */}
          <div className={`hero-text-block animar-scroll from-bottom ${heroVisible ? "visible":""}`}>
            <span className="hero-tag">⚖️ Asesoría en Criminología y Derecho Penal Prueba</span>

            <h1 className="hero-title">
              La sentencia de un juicio no solo depende de las leyes, sino de cómo se argumenta la verdad.
            </h1>

            <p className="hero-text">
              Como criminólogo especializado en derecho penal, ofrezco un enfoque integral que combina el análisis criminológico con la defensa jurídica.
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

          {/* IMAGEN HERO */}
          <div className={`hero-image-wrapper animar-scroll from-bottom ${heroVisible?"visible":""}`}>
            <img src={heroImage} alt="Imagen representativa criminología" />
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="experience-section">
        <div className="container experience-layout">
          <div className={`experience-text animar-scroll from-left ${experienceVisible ? "visible" : ""}`}>
            <h2>Experiencia en Criminología y Derecho Penal</h2>
            <p>
              Como criminólogo especializado en el ámbito penal, ofrezco un enfoque integral que combina el análisis criminológico con la defensa jurídica. Mi formación me permite comprender no solo los aspectos legales, sino también los factores criminológicos que intervienen en cada caso.
            </p>
            <p>
              Mi compromiso es brindar asesoramiento profesional, cercano y personalizado, garantizando la mejor defensa de tus intereses dentro del marco legal vigente.            </p>
            <ul className="experience-list">
              <li>Análisis criminológico del caso.</li>
              <li>Defensa personalizada y estratégica.</li>
              <li>Acompañamiento en todo el proceso judicial.</li>
            </ul>
          </div>

          <div className={`experience-cards animar-scroll from-right ${experienceVisible ? "visible" : ""}`}>
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

      {/* SOCIAL */}
      <section className={`social-section animar-scroll from-bottom ${socialVisible ? "visible" : ""}`}>
        <h2>Mis publicaciones</h2>
        <p className="social-description">
          Sígueme en redes sociales para mantenerte actualizado
        </p>

        <div className="social-grid">
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

          <a
            href="https://www.linkedin.com/in/guillermo-exp%C3%B3sito-crimin%C3%B3logo"
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
      </section>
    </>
  );
}