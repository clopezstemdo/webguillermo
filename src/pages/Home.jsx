import "../styles/home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          ⚖️ Criminología y Derecho Penal
        </span>

        <h1 className="hero-title">
          Asesoría Jurídica Especializada en Derecho Penal
        </h1>

        <p className="hero-text">
          Asesoramiento legal especializado con enfoque criminológico.
          Protegemos tus derechos con experiencia, rigor profesional
          y un profundo conocimiento del sistema penal.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Consulta gratuita</button>
          <button className="btn-secondary">Ver servicios</button>
        </div>
      </div>
    </section>
  );
}
``