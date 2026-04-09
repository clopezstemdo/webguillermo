import "../styles/servicios.css";
import { Link } from "react-router-dom";

export default function Servicios() {
  return (
    <>
      {/* HERO */}
      <section className="servicios-hero">
        <div className="container">
          <h1>Servicios Profesionales</h1>
          <p>
            Asesoramiento especializado en criminología y derecho penal,
            con un enfoque riguroso, personalizado y profesional.
          </p>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="servicios-section">
        <div className="container">
          <div className="servicios-grid">
            <ServiciosCard
              title="Asesoría en Derecho Penal"
              text="Asesoramiento legal en todas las fases del proceso penal, desde la orientación inicial hasta la defensa."
            />
            <ServiciosCard
              title="Análisis Criminológico"
              text="Estudio científico del comportamiento delictivo y del contexto personal y social implicado en cada caso."
            />
            <ServiciosCard
              title="Informes Criminológicos"
              text="Elaboración de informes periciales y criminológicos con base técnica y metodológica."
            />
            <ServiciosCard
              title="Asesoramiento Preventivo"
              text="Orientación jurídica preventiva y consultiva para evitar conflictos legales."
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="servicios-cta">
        <div className="container">
          <h2>Da el primer paso hacia un asesoramiento profesional</h2>
          <p>
            Contacta sin compromiso y recibe una orientación personalizada
            adaptada a tu caso.
          </p>
          <Link to="/contacto" className="btn-primary">
            Solicitar consulta gratuita
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiciosCard({ title, text }) {
  return (
    <div className="servicios-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
