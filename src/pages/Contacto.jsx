import "../styles/contacto.css";
import { useState } from "react";
import emailjs from "emailjs-com";

import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import tiktokIcon from "../assets/icons/tiktok.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import whatsappIcon from "../assets/icons/whatsapp.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs.send(
      "service_ddp5j4p",
      "template_zkclswb",
      formData,
      "EFu53trEKlEOzmhHL"
    );

    emailjs.send(
      "service_ddp5j4p",
      "template_20yh0np",
      {
        name: formData.name,
        email: formData.email
      },
      "EFu53trEKlEOzmhHL"
    );

    
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 4000);

    setFormData({ name: "", phone: "", email: "", message: "" });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    // Nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    // Teléfono: solo números y exactamente 9 dígitos
    const phoneRegex = /^[0-9]{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "El teléfono debe tener 9 dígitos numéricos";
    }

    // Email: formato válido básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Introduce un email válido";
    }

    // Mensaje
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
            hablemos.
          </p>

          <div className="contact-cards">

            <a href="mailto:guillermoexpositocriminologo@gmail.com" className="contact-card">
              <img src={mailIcon} alt="Email" className="contact-icon" />
              <div className="contact-card-text">
                <h4>Email</h4>
                <p>Escribeme directamente pulsado aquí</p>
              </div>
            </a>

            <a href="tel:+34624969220" className="contact-card">
              <img src={phoneIcon} alt="Teléfono" className="contact-icon" />
              <div className="contact-card-text">
                <h4>Teléfono</h4>
                <p>+34 624 96 92 20</p>
              </div>
            </a>

            <a
              href="https://wa.me/34624969220?text=Buenas,%20querr%C3%ADa%20solicitar%20una%20valoraci%C3%B3n%20inicial."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
              <div className="contact-card-text">
                <h4>WhatsApp</h4>
                <p>Escríbeme directamente pulsando aquí</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/guillermo-expósito-criminólogo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
              <div className="contact-card-text">
                <h4>LinkedIn</h4>
                <p>guillermo-expósito-criminólogo</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/guillermoexpositocriminologo/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img src={instagramIcon} alt="Instagram" className="contact-icon" />
              <div className="contact-card-text">
                <h4>Instagram</h4>
                <p>@guillermoexpositocriminologo</p>
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@guillermocriminologo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <img src={tiktokIcon} alt="TikTok" className="contact-icon" />
              <div className="contact-card-text">
                <h4>TikTok</h4>
                <p>@guillermocriminologo</p>
              </div>
            </a>

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
              maxLength={9}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value.replace(/\D/g, ""), // ✅ solo números
                })
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
      
      {showToast && (
        <div className="toast-success">
          ✅ Mensaje enviado correctamente
        </div>
      )}

    </section>
  );
};

export default Contact;
