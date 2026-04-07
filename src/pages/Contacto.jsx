
import '../styles/contacto.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">

        {/* COLUMNA IZQUIERDA */}
        <div className="contact-info">
          <h2>Información de contacto</h2>

          <p><strong>Teléfono:</strong> 600 123 456</p>
          <p><strong>Email:</strong> contacto@ejemplo.com</p>
          <p><strong>Dirección:</strong> Talavera de la Reina</p>
          <p><strong>Horario:</strong> Lun - Vie, 9:00 a 18:00</p>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="contact-form">
          <h2>Envíanos tu consulta</h2>

          <form>
            <input type="text" placeholder="Nombre" />
            <input type="tel" placeholder="Teléfono" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Describe tu caso" />
            <button type="submit">Enviar</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
