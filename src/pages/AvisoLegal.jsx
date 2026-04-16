import "../styles/aviso-legal.css";

export default function AvisoLegal() {
  return (
    <>
      {/* HERO */}
      <section className="legal-hero">
          <h1>Aviso legal</h1>
          <p>
            Información legal y condiciones de uso del sitio web.
          </p>
        
      </section>

      {/* CONTENIDO LEGAL */}
      <main className="aviso-legal">
        <p>
          En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio,
          de Servicios de la Sociedad de la Información y del Comercio
          Electrónico (LSSI-CE), se informa de los siguientes datos:
        </p>

        <h2>1. Datos del titular</h2>
        <p>
          Titular del sitio web: Profesional del ámbito de la criminología.
        </p>
        <p>
          Actividad: Prestación de servicios profesionales de criminología,
          análisis de casos y asesoramiento técnico.
        </p>
        <p>Domicilio profesional: España.</p>
        <p>Correo electrónico de contacto: contacto@tudominio.es</p>

        <h2>2. Objeto del sitio web</h2>
        <p>
          El sitio web tiene como finalidad ofrecer información sobre los
          servicios profesionales prestados y facilitar el contacto con
          personas interesadas.
        </p>

        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso y navegación por este sitio web implica la aceptación
          de las presentes condiciones de uso.
        </p>

        <h2>4. Propiedad intelectual</h2>
        <p>
          Los contenidos del sitio web están protegidos por la normativa
          de propiedad intelectual.
        </p>

        <h2>5. Responsabilidad</h2>
        <p>
          El titular no se hace responsable del uso indebido de la
          información contenida en este sitio web.
        </p>

        <h2>6. Protección de datos</h2>
        <p>
          El tratamiento de los datos personales se rige por el RGPD y la
          normativa española vigente.
        </p>

        <h2>7. Legislación aplicable</h2>
        <p>
          El presente aviso legal se rige por la legislación española.
        </p>
      </main>
    </>
  );
}