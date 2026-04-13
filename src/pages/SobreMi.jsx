import "../styles/sobre-mi.css";
import image from "../assets/Guillermo.webp";
import { useState } from "react";
import { useEffect } from "react";

const SobreMi = () => {
  const [openIndex, setOpenIndex] = useState(null);
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

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

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
          <div className="about-with-social">
            {/* COLUMNA IZQUIERDA */}
            <div className="about-main">
              <section className="about-container">
                {/* IMAGEN */}
                <div className="about-image">
                  <img src={image} alt="Foto del cliente" />
                </div>

                {/* TEXTO */}
                <div className="about-content">
                  <h2>Guillermo Expósito</h2>
                  <span className="about-role">Profesional del sector</span>

                  <p>
                    Soy Guillermo Expósito, criminólogo especializado en el análisis estratégico de casos y el acompañamiento 
                    durante las diferentes fases de los procedimientos dentro del sistema judicial y penitenciario. 
                    Mi objetivo es acompañarte y asesorarte en estos momentos difíciles de entender y en los que hay tanto en juego. 

                    A lo largo de mi trayectoria, he comprobado que el éxito en un caso va mucho más allá del estrado: 
                    reside en la preparación previa, en la selección minuciosa de una estrategia y en tener a mis clientes 
                    informados en cada fase del proceso para que lo afronten de manera segura. Mi trabajo consiste en dotar 
                    a bufetes de abogados, empresas y particulares de las herramientas criminológicas necesarias para afrontar 
                    sus procedimientos con la máxima garantía de éxito. 
                  </p>

                  <ul className="about-list">
                    <li>✔ Más de X años de experiencia</li>
                    <li>✔ Atención personalizada</li>
                    <li>✔ Servicio en Talavera y alrededores</li>
                  </ul>

                  <a href="/contacto" className="about-button">
                    Contactar
                  </a>
                </div>
              </section>
            </div>

            {/* COLUMNA DERECHA */}
            <div className="about-social">
              <div className="about-social-box">
                <iframe
                  src="https://www.tiktok.com/embed/v2/7524993632424758550"
                  width="325"
                  height="580"
                  allowFullScreen
                  title="TikTok"
                  style={{
                    border: "none",
                    borderRadius: "12px",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="faq-section-inner">
          <div className="faq-with-social">

            {/* COLUMNA IZQUIERDA — INSTAGRAM */}
            <div className="faq-social">
              <div className="faq-social-box">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/DQR4yr6DI3_/?igsh=MWpicWhhcTFuYXQ1eA%3D%3D"
                  data-instgrm-version="14"
                ></blockquote>
              </div>
            </div>

            {/* COLUMNA DERECHA — FAQ */}
            <div className="faq-main">
              <section className="faq-container">
                <h2>Preguntas frecuentes</h2>

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
                ))}
              </section>
            </div>

          </div>
        </div>
      </section>

      {/* <section className="faq">
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
      </section> */}
    </>
  );
};

export default SobreMi;
