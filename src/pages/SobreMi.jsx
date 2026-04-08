import '../styles/sobre-mi.css'

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        {/* IMAGEN */}
        <div className="about-image">
          <img
            src="https://via.placeholder.com/300"
            alt="Foto del cliente"
          />
        </div>

        {/* TEXTO */}
        <div className="about-content">
          <h1>Sobre mí</h1>

          <h2>Nombre del cliente</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About