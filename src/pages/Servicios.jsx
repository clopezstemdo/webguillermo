import "../styles/servicios.css";
import { Link } from "react-router-dom";

export default function Servicios() {
  return (
    <>
      {/* HERO */}
      <section className="services-hero">
        <div className="container">
          <h1>Servicios Profesionales</h1>
          <p>
            Asesoramiento especializado en criminología y derecho penal,
            con un enfoque riguroso, personalizado y profesional.
          </p>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="services-section">
        <div className="container services-grid">
          <ServiceCard
            title="Asesoría en Derecho Penal"
            text="Asesoramiento legal en todas las fases del proceso penal, desde la orientación inicial hasta la defensa."
          />
          <ServiceCard
            title="Análisis Criminológico"
            text="Estudio científico del comportamiento delictivo y del contexto personal y social implicado en cada caso."
          />
          <ServiceCard
            title="Informes Criminológicos"
            text="Elaboración de informes periciales y criminológicos con base técnica y metodológica."
          />
          <ServiceCard
            title="Asesoramiento Preventivo"
            text="Orientación jurídica preventiva y consultiva para evitar conflictos legales."
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="services-cta">
        <h2>¿Necesitas asesoramiento profesional?</h2>
        <Link to="/contacto" className="btn-primary">
          Consulta gratuita
        </Link>
      </section>
    </>
  );
}

function ServiceCard({ title, text }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
``