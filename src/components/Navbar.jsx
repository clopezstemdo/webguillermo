import "../styles/header-footer.css";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <span className="site-title">
          Guillermo Expósito Criminólogo
        </span>

        <nav>
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Sobre mí</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
