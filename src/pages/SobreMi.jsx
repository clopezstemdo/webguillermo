import "../styles/sobre-mi.css";
import image from "../assets/Guillermo.webp";
import { useState } from "react";

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

  return (
    <>
      <section className="about">
        <div className="about-container">
          {/* IMAGEN */}
          <div className="about-image">
            <img src={image} alt="Foto del cliente" />
          </div>

          {/* TEXTO */}
          <div className="about-content">
            <h1>Sobre mí</h1>

            <h2>Guillermo Expósito</h2>
            <span className="about-role">Profesional del sector</span>

            <p>
              Soy Guillermo Expósito, criminólogo especializado en el análisis
              estratégico de casos y el acompañamiento durante las diferentes
              fases de los procedimientos dentro del sistema judicial y
              penitenciario. Mi objetivo es acompañarte y asesorarte en estos
              momentos difíciles de entender y en los que hay tanto en juego. A lo
              largo de mi trayectoria, he comprobado que el éxito en un caso va
              mucho más allá del estrado: reside en la preparación previa, en la
              selección minuciosa de una estrategia y en tener a mis clientes
              informados en cada fase del proceso para que lo afronten de manera
              segura. Mi trabajo consiste en dotar a bufetes de abogados, empresas
              y particulares de las herramientas criminológicas necesarias para
              afrontar sus procedimientos con la máxima garantía de éxito.
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
