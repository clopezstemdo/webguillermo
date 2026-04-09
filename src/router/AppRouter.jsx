import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Servicios from "../pages/servicios";
import SobreMi from "../pages/SobreMi";
import Social from "../pages/social";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/social" element={<Social />} />
    </Routes>
  );
};

export default AppRouter;