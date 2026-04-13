import "../styles/contacto.css";
import { useState } from "react";
import emailjs from "emailjs-com";

import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import tiktokIcon from "../assets/icons/tiktok.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

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

    alert("Mensaje enviado correctamente ✅");
    setFormData({ name: "", phone: "", email: "", message: "" });
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "El nombre es obligatorio";
    if (!formData.phone) newErrors.phone = "El teléfono es obligatorio";
    if (!formData.email) newErrors.email = "El email es obligatorio";
    if (!formData.message) newErrors.message = "El mensaje es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Ponte en contacto</h2>
          <p className="contact-intro">
            La información y la preparación son la clave para dominar el escenario judicial.
            Si buscas un enfoque criminológico profesional y adaptado a tus necesidades,
            hablemos.
          </p>

          <div className="contact-cards">

            <a href="mailto:contacto@tudominio.com" className="contact-card">
              <img src={mailIcon} alt="Email" className="contact-icon" />
              <div className="contact-card-text">
                <h4>Email</h4>
                <p>contacto@tudominio.com</p>
              </div>
            </a>

            <a href="tel:+34600123456" className="contact-card">
              <img src={phoneIcon} alt="Teléfono" className="contact-icon" />
              <div className="contact-card-text">
                <h4>Teléfono</h4>
                <p>+34 600 123 456</p>
              </div>
            </a>

            <a href="https://www.instagram.com/TU_USUARIO" className="contact-card" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" className="contact-icon" />
              <div className="contact-card-text">
                <h4>Instagram</h4>
                <p>@tuusuario</p>
              </div>
            </a>

            <a href="https://www.tiktok.com/@TU_USUARIO" className="contact-card" target="_blank" rel="noreferrer">
              <img src={tiktokIcon} alt="TikTok" className="contact-icon" />
              <div className="contact-card-text">
                <h4>TikTok</h4>
                <p>@tuusuario</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/TU_USUARIO" className="contact-card" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
              <div className="contact-card-text">
                <h4>LinkedIn</h4>
                <p>Perfil profesional</p>
              </div>
            </a>

          </div>
        </div>

        <div className="contact-form">
          <h2>Envíanos tu consulta</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="tel"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <textarea
              placeholder="Describe tu caso"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit">Enviar</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
``