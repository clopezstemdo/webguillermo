import "../styles/sobre-mi.css";
import image from "../assets/Guillermo.webp";
import { useState } from "react";
import video from "../assets/videos/video.MP4"
import tiktokIcon from "../assets/icons/tiktok.svg"
import instagramIcon from "../assets/icons/instagram.svg"
import linkedinIcon from "../assets/icons/linkedin.svg"

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


const SobreMi = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const autoplay = Autoplay({
    delay: 4000,               // ✅ movimiento constante
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [autoplay]
  );


  const reviews = [
    {
      name: "Cliente 1",
      text: "Profesionalidad absoluta y acompañamiento constante durante todo el proceso.",
    },
    {
      name: "Cliente 2",
      text: "Explicaciones claras, trato cercano y estrategia perfectamente definida.",
    },
    {
      name: "Cliente 3",
      text: "Muy recomendable. Me sentí asesorado y respaldado desde el primer momento.",
    },
    {
      name: "Cliente 4",
      text: "Gran conocimiento técnico y excelente comunicación.",
    },
    {
      name: "Cliente 5",
      text: "Trato muy profesional y cercano. En todo momento sentí que entendía bien el proceso y las opciones disponibles."
    },
    {
      name: "Cliente 6",
      text: "Explicaciones claras y directas, sin tecnicismos innecesarios. Me ayudó a tomar decisiones con mayor seguridad."
    },
    {
      name: "Cliente 7",
      text: "Acompañamiento constante durante todo el procedimiento. Destaco la claridad y la implicación desde el primer contacto."
    },
  ];


  const faqs = [
    {
      question: "¿Trabajas solo con abogados o también con particulares?",
      answer:
        "Trabajo mano a mano con despachos de abogados, pero también ofrezco asesoramiento directo a particulares o empresas."
    },
    {
      question: "¿En qué momento del proceso debo contactar a un criminólogo?",
      answer:
        "Cuanto antes, mejor. La estrategia criminológica es más efectiva si se implementa en las primeras fases del proceso."
    },
    {
      question: "¿Si no tengo abogado puedes ofrecerme uno?",
      answer:
        "Sí, colaboro con abogados especializados en diferentes áreas del Derecho."
    },
    {
      question: "¿Trabajas en diferentes zonas de España?",
      answer:
        "Sí, trabajo con casos de todo el territorio nacional, tanto insular como peninsular."
    }
  ];

  return (
    <>
      <section className="sobre-mi-hero">
        <div className="container">
          <h1>Sobre mí</h1>
          <p>
            Conoce mi trayectoria profesional, mi enfoque de trabajo
            y cómo puedo ayudarte desde la criminología aplicada.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-inner">
          <div className="about-layout">
            {/* COLUMNA IZQUIERDA */}
            <div className="about-main">
              <section className="about-container">
                {/* Video */}
                <div className="about-video">
                  <video
                    src={video}
                    controls
                    preload="metadata"
                  />
                </div>

                {/* TEXTO */}
                <div className="about-content">
                  <h2>Guillermo Expósito</h2>
                  <span className="about-role">Profesional del sector</span>

                  <p>
                    Soy Guillermo Expósito, criminólogo especializado en el análisis estratégico de casos y el acompañamiento 
                    durante las diferentes fases de los procedimientos dentro del sistema judicial y penitenciario. 
                    Mi objetivo es acompañarte y asesorarte en estos momentos difíciles de entender y en los que hay tanto en juego. 
                  </p>
                  <p>A lo largo de mi trayectoria, he comprobado que el éxito en un caso va mucho más allá del estrado: 
                    reside en la preparación previa, en la selección minuciosa de una estrategia y en tener a mis clientes 
                    informados en cada fase del proceso para que lo afronten de manera segura. Mi trabajo consiste en dotar 
                    a bufetes de abogados, empresas y particulares de las herramientas criminológicas necesarias para afrontar 
                    sus procedimientos con la máxima garantía de éxito. 
                  </p>

                  <a href="/contacto" className="about-button">
                    Contacta conmigo
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {[...reviews, ...reviews].map((review, index) => (
              <div className="embla__slide" key={index}>
                <article className="review-card">
                  <p className="review-text">“{review.text}”</p>
                  <span className="review-name">{review.name}</span>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="about-social-links-section">
        <div className="about-social-links-inner">
          <a
            href="https://www.tiktok.com/@guillermocriminologo"
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-link tiktok"
          >
            <img src={tiktokIcon} alt="TikTok" />
          </a>

          <a
            href="https://www.instagram.com/guillermoexpositocriminologo/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-link instagram"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>

          <a
            href="https://www.linkedin.com/in/guillermo-exp%C3%B3sito-crimin%C3%B3logo/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-social-link linkedin"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </section>

      <section className="faq">
        <div className="faq-container">
          <h2>Preguntas frecuentes (FAQ)</h2>
          
          {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.question}
                </button>

                {openIndex === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default SobreMi;
