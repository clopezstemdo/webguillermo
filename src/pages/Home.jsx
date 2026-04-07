import "../styles/home.css";

export default function Home() {
  return (
    <>
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

    <section className="experience-section">
      <div className="experience-layout">

        {/* COLUMNA IZQUIERDA */}
        <div className="experience-text">
      <h2>Experiencia en Criminología y Derecho Penal</h2>

      <p>
        Como criminólogo especializado en el ámbito penal, ofrezco un
        enfoque integral que combina el análisis criminológico con la
        defensa jurídica. Mi formación me permite comprender no solo
        los aspectos legales, sino también los factores criminológicos
        que intervienen en cada caso.
      </p>

      <p>
        Mi compromiso es brindar asesoramiento profesional, cercano y
        personalizado, garantizando la mejor defensa de tus intereses
        dentro del marco legal vigente.
      </p>

      <ul className="experience-list">
        <li>Análisis criminológico del caso.</li>
        <li>Defensa personalizada y estratégica.</li>
        <li>Acompañamiento en todo el proceso judicial.</li>
      </ul>
    </div>

    {/* COLUMNA DERECHA */}
    <div className="experience-cards">
      <div className="service-card">
        <h4>Asesoría penal</h4>
        <p>Asesoramiento en todas las fases del proceso penal.</p>
      </div>

      <div className="service-card">
        <h4>Criminología</h4>
        <p>Análisis científico del comportamiento delictivo.</p>
      </div>

      <div className="service-card">
        <h4>Informes periciales</h4>
        <p>Elaboración de informes criminológicos especializados.</p>
      </div>

      <div className="service-card">
        <h4>Asesoramiento</h4>
        <p>Orientación jurídica preventiva y consultiva.</p>
      </div>
    </div>

  </div>
</section>
    </>
  );
}
``