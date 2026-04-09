import '../styles/sobre-mi.css'
import image from "../assets/Guillermo.webp"

const SobreMi = () => {
  return (
    <section className="about">
      <div className="about-container">

        {/* IMAGEN */}
        <div className="about-image">
            <img
            src={image}
            alt="Foto del cliente"
            />
        </div>

        {/* TEXTO */}
        <div className="about-content">
            <h1>Sobre mí</h1>

            <h2>Nombre del cliente</h2>
            <span className="about-role">Profesional del sector / Autónomo</span>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
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
  )
}

export default SobreMi