import "../styles/home.css";

import heroImage from "../assets/hero-image.jpg";
import tiktokIcon from "../assets/tiktok.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";

import { NavLink } from "react-router-dom";

import {motion} from "framer-motion";

import mazoIcon from "../assets/icons/mazo.svg";
import escudoIcon from "../assets/icons/escudo.svg";
import papelesIcon from "../assets/icons/papeles.svg";
import avatarIcon from "../assets/icons/avatar.svg";

export default function Home() {

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          {/* TEXTO HERO */}
          <motion.div
            className="hero-text-block"
            initial = {{opacity: 0, y: 30}}
            animate = {{opacity: 1, y: 0}}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <span className="hero-tag">Asesoría en Criminología y Derecho Penal</span>

            <h1 className="hero-title">
              La sentencia de un juicio no solo depende de las leyes, sino de cómo se argumenta la verdad.
            </h1>

            <p className="hero-text">
              Como criminólogo especializado en derecho penal, ofrezco un enfoque integral que combina el análisis criminológico con la defensa jurídica.
            </p>

            <div className="hero-buttons">
              <NavLink to="/contacto" className="btn-primary">
                Solicita tu consulta
              </NavLink>

              <NavLink to="/servicios" className="btn-secondary">
                Ver servicios
              </NavLink>
            </div>
          </motion.div>

          {/* IMAGEN HERO */}
          <motion.div className="hero-image-wrapper"
            initial= {{ opacity: 0, y: 30}}
            animate= {{ opacity: 1, y: 0}}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <img src={heroImage} alt="Imagen representativa criminología" />
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="experience-section">
        <div className="container experience-layout">
          <motion.div className="experience-text"
            initial = {{opacity: 0, x: -50}}
            whileInView={{ opacity: 1, x: 0}}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{once: true, amount: 0.2}}
          >
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
          </motion.div>

          
          <motion.div
            className="experience-cards"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1
            }}
            viewport={{ once: true, amount: 0.2 }}
          >

            <div className="service-card">
              <div className="service-icon">
                <img src={mazoIcon} alt="Asesoría penal" />
              </div>
              <h4>Asesoría penal</h4>
              <p>Asesoramiento en cada fase del proceso para la toma de decisiones informadas y seguras.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={escudoIcon} alt="Criminología" />
              </div>
              <h4>Criminología</h4>
              <p>Análisis científico sobre la dinámica del delito, la evaluación de riesgos o el contexto del infractor o la víctima.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={papelesIcon} alt="Informes periciales" />
              </div>
              <h4>Informes periciales</h4>
              <p>Elaboración de dictámenes técnicos fundamentales para la defensa o la acusación.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={avatarIcon} alt="Asesoramiento" />
              </div>
              <h4>Acompañamiento</h4>
              <p>Traduzco el lenguaje jurídico a términos comprensibles para mis clientes, preparándolos para afrontar cada intervención durente el proceso.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL */}
      <motion.section
        className="social-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true, amount: 0.2 }}
      >

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
      </motion.section>
    </>
  );
}