
import '../styles/contacto.css'
import { useState } from 'react'

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({}); // Guarda los errores

  const handleSubmit = (e) => {
    e.preventDefault(); // 🚫 evita recarga

    if (validateForm()) {
      console.log("Formulario válido", formData);

      // Limpia el formulario (opcional)
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });

      setErrors({});
      alert("Formulario enviado correctamente ✅");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio";
    } else if(!/^\d+$/.test(formData.phone)){
      newErrors.phone = "El teléfono solo debe contener números";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <section className="contact">
      <div className="contact-container">

        {/* COLUMNA IZQUIERDA */}
        <div className="contact-info">

          <h2>Ponte en contacto</h2>

          <p className="contact-intro">
            La información y la preparación son la clave para dominar el escenario judicial.
            Si buscas un enfoque criminológico profesional y adaptado a tus necesidades,
            hablemos:
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              {/* <img src={emailIcon} alt="Email" /> */}
              <h4>Email</h4>
              <p>contacto@tudominio.com</p>
            </div>

            <div className="contact-card">
              {/* <img src={phoneIcon} alt="Teléfono" /> */}
              
              <h4>Teléfono</h4>
              <p>600 123 456</p>
            </div>

            <div className="contact-card">
              {/* <img src={locationIcon} alt="Dirección" /> */}
              <h4>Dirección</h4>
              <p>Talavera de la Reina</p>
            </div>

            <div className="contact-card">
              {/* <img src={clockIcon} alt="Horario" /> */}
              
              <h4>Horario</h4>
              <p>L–V · 9:00 – 18:00</p>
            </div>
          </div>
        </div>


        {/* COLUMNA DERECHA */}
        <div className="contact-form">
          <h2>Envíanos tu consulta</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="tel"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <textarea
              placeholder="Describe tu caso"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit">Enviar</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
