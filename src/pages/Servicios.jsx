import "../styles/servicios.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { useEffect } from "react";

export default function Servicios() {

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

  // useEffect(() => {
    // const elements = document.querySelectorAll(".animar-scroll");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("visible");
  //           observer.unobserve(entry.target); // ✅ solo una vez
  //         }
  //       });
  //     },
  //     { threshold: 0.2 }
  //   );

  //   elements.forEach((el) => observer.observe(el));

  //   return () => observer.disconnect();
  // }, []);

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
        className="servicios-bloque"
        variants={fadeUpOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
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
              <strong>Asesoramiento y acompañamiento judicial:</strong> Te
              guío durante todo el procedimiento, traduciendo el lenguaje
              jurídico y preparándote para cada intervención.
            </li>
            <li>
              <strong>Informes criminológicos periciales:</strong>
              Elaboración de dictámenes técnicos para la defensa o la
              acusación, con enfoque científico.
            </li>
            <li>
              <strong>Gestión post‑condena:</strong> Suspensión de condena,
              cancelación de antecedentes y trámites penitenciarios.
            </li>
          </ul>
        </div>
      </motion.section>

      
      <motion.section
        className="servicios-bloque servicios-alt"
        variants={fadeUpOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
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
              <strong>Adaptación y apoyo cognitivo:</strong> Adecuación del
              lenguaje judicial para una comprensión plena del proceso.
            </li>
            <li>
              <strong>Reducción del estrés procesal:</strong> Acompañamiento
              especializado que protege el bienestar emocional.
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="servicios-bloque"
        variants={fadeUpOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
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

          <p>
            El cumplimiento de una condena no implica renunciar a la defensa.
            Trabajo para garantizar tus derechos y optimizar el proceso de
            reinserción.
          </p>

          <ul className="servicios-lista">
            <li>
              <strong>Clasificación y progresiones de grado:</strong> Acceso
              al tercer grado y régimen abierto.
            </li>
            <li>
              <strong>Beneficios penitenciarios:</strong> Permisos, libertad
              condicional y adelantamientos.
            </li>
            <li>
              <strong>Recursos ante Vigilancia Penitenciaria:</strong>
              Impugnación de sanciones o regresiones.
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="servicios-bloque servicios-alt"
        variants={fadeUpOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
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
          <p>
            Intervención especializada con enfoque educativo y preventivo,
            priorizando la inserción social del menor.
          </p>

          <ul className="servicios-lista">
            <li>
              <strong>Acompañamiento integral:</strong> Asesoramiento al
              menor y a la familia desde el inicio del proceso.
            </li>
            <li>
              <strong>Informes de valoración del riesgo:</strong> Análisis del
              contexto y factores de protección.
            </li>
            <li>
              <strong>Propuesta de medidas socioeducativas:</strong>
              Alternativas a medidas privativas de libertad.
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="servicios-bloque"
        variants={fadeUpOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
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

          <p>
            Protección legal y búsqueda de soluciones para regularizar tu
            situación administrativa en España.
          </p>

          <ul className="servicios-lista">
            <li>
              <strong>Recursos contra órdenes de expulsión:</strong> Análisis
              exhaustivo del expediente y defensa administrativa.
            </li>
            <li>
              <strong>Regularización extraordinaria:</strong> Gestión
              integral de procedimientos de arraigo.
            </li>
          </ul>
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



