import "../styles/servicios.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import penal from "../assets/penal.jpg";
import facilitacion from "../assets/informecriminologico.jpg";
import penitenciaria from "../assets/area-penitenciaria.jpg";
import justiciamenores from "../assets/justicia-menores.jpg";
import extranjeria from "../assets/area-extranjeria.jpg";


export default function Servicios() {

  
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);


  const fadeUpOnScroll = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <section className="servicios-hero">
        <div className="container">
          <h1>Servicios</h1>
          <p>
            Intervención profesional en criminología, derecho penal y
            ámbitos relacionados, con un enfoque técnico, humano y riguroso.
          </p>
        </div>
      </section>

      
      <motion.section
        id="penal"
        className="servicios-bloque"
        variants={fadeUpOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="servicio-card">
            <div className="servicio-content">
              <h2>
                Área Penal y Criminológica
                <motion.span
                  className="subrayado"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="servicios-intro">
                Estrategia, rigor científico y defensa de tus derechos en el
                proceso penal.
              </p>

              <p>
                Enfrentarse a un procedimiento penal genera un alto grado de
                incertidumbre. Mi labor consiste en dotar a tu caso de una base
                técnica y estratégica, acompañándote en cada fase del proceso
                para que tomes decisiones informadas y seguras.
              </p>

              <ul className="servicios-lista">
                <li>
                  <strong>Asesoramiento y acompañamiento judicial</strong> Te
                  guío durante todo el procedimiento, traduciendo el lenguaje
                  jurídico y preparándote para cada intervención.
                </li>
                <li>
                  <strong>Informes criminológicos periciales</strong>
                  Elaboración de dictámenes técnicos para la defensa o la
                  acusación, con enfoque científico.
                </li>
                <li>
                  <strong>Gestión después de la condena</strong> Suspensión de condena,
                  cancelación de antecedentes.
                </li>
              </ul>
            </div>
            
            <div className="servicio-media">
              <img src={penal} alt="Área Penal y Criminológica" />
            </div>

          </div>
        </div>
      </motion.section>

      
      <motion.section
        id="facilitacion"
        className="servicios-bloque servicios-alt"
        variants={fadeUpOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="servicio-card">
            <div className="servicio-content">
              <h2>
                Facilitación Judicial
                <motion.span
                  className="subrayado"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="servicios-intro">
                Garantizando el acceso a la justicia en igualdad de condiciones.
              </p>

              <p>
                El entorno judicial puede resultar hostil, especialmente para
                personas mayores o con discapacidad. La figura del facilitador
                asegura la comprensión real del proceso.
              </p>

              <ul className="servicios-lista">
                <li>
                  <strong>Adaptación y apoyo cognitivo</strong> Adecuación del
                  lenguaje judicial para una comprensión plena del proceso.
                </li>
                <li>
                  <strong>Reducción del estrés procesal</strong> Acompañamiento
                  especializado que protege el bienestar emocional.
                </li>
              </ul>
            </div>
            <div className="servicio-media">
              <img src={facilitacion} alt="Facilitación Judicial" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="penitenciaria"
        className="servicios-bloque"
        variants={fadeUpOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="servicio-card">
            <div className="servicio-content">
              <h2>
                Área Penitenciaria
                <motion.span
                  className="subrayado"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </h2>
              
              <p className="servicios-intro">
                DEFENSA TÉCNICA Y GARANTÍA DE DERECHOS DURANTE LA EJECUCIÓN DE LA CONDENA
              </p>

              <p>
                El ingreso en prisión no suopne la pérdida del derecho de defensa. Trabajo para 
                asegurar que la ejecución de la pena se ajuste a la legalidad y esté orientada
                a la reinserción, optimizando el tiempo de cumplimiento. 
              </p>

              <ul className="servicios-lista">
                <li>
                  <strong>Clasificación y progresiones de grado</strong> Tramitación de expedientes para la obtención del 
                  Tercer Grado y acceso al régimen abierto.
                </li>
                <li>
                  <strong>Beneficios penitenciarios</strong> Preparación de solicitudes para la obtención de permisos 
                  de salida (ordinario y extraordinarios).
                </li>
                <li>
                  <strong>Recursos ante Vigilancia Penitenciaria</strong>
                  Por denegaciones de permisos, sanciones disciplinarias o regresiones de grado.
                </li>
              </ul>
            </div>
            <div className="servicio-media">
              <img
                src={penitenciaria}
                alt="Área Penitenciaria"
              />

            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="menores"
        className="servicios-bloque servicios-alt"
        variants={fadeUpOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="servicio-card">
            <div className="servicio-content">
              <h2>
                Justicia de Menores
                <motion.span
                  className="subrayado"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="servicios-intro">
                ACTUACIÓN TÉCNICA ORIENTADA A LA EDUCACIÓN Y PROTECCIÓN DEL MENOR
              </p>
              <p>
                Intervención especializada con enfoque educativo y preventivo,
                priorizando el comportamiento prosocial del menor.
              </p>

              <ul className="servicios-lista">
                <li>
                  <strong>Acompañamiento integral</strong> Asesoramiento y acompañamiento al
                  menor y a la familia desde el inicio del proceso.
                </li>
                <li>
                  <strong>Informes de valoración del riesgo</strong> Análisis del
                  contexto así como de factores de riesgo y de protección.
                </li>
                <li>
                  <strong>Propuesta de medidas socioeducativas</strong>
                  Propuestas de sanciones alternativas a medidas privativas de libertad.
                </li>
              </ul>
            </div>
            <div className="servicio-media">
              <img src={justiciamenores} alt="Justicia de Menores" />
            </div>

          </div>
        </div>
      </motion.section>

      <motion.section
        id="extranjeria"
        className="servicios-bloque"
        variants={fadeUpOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <div className="servicio-card">
            <div className="servicio-content">
              <h2>
                Área de Extranjería
                <motion.span
                  className="subrayado"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </h2>

              <p className="servicios-intro">
                PROTECCIÓN LEGAL Y BÚSQUEDA DE SOLUCIONES PARA TU SITUACIÓN EN ESPAÑA
              </p>


              <p>
                Soluciones viables y fundamentales para regularizar tu situación y proteger tu arraigo en el país.
              </p>

              <ul className="servicios-lista">
                <li>
                  <strong>Recursos contra órdenes de expulsión</strong> Análisis
                  exhaustivo del expediente y para paralizar o revocar resoluciones de expulsión. 
                </li>
                <li>
                  <strong>Regularización extraordinaria</strong> Asesoramiento y gestión integral del procedimiento, asegurando las opciones de éxito.
                </li>
              </ul>
            </div>
            <div className="servicio-media">
              <img src={extranjeria} alt="Área Extranjería" />
            </div>
          </div>
        </div>
      </motion.section>

      <section className="servicios-cta">
        <div className="container">
          <h2>¿Hablamos de tu caso?</h2>
          <Link to="/contacto" className="btn-primary">
            Solicitar consulta
          </Link>
        </div>
      </section>
    </>
  );
}



