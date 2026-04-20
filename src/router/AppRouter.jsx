import { Routes, Route } from "react-router-dom"

import Home from "../pages/home";
import Contacto from "../pages/contacto";
import Servicios from "../pages/servicios";
import SobreMi from "../pages/sobreMi";
import Social from "../pages/social";
import AvisoLegal from "../pages/avisoLegal";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/social" element={<Social />} />
      <Route path="/avisolegal" element={<AvisoLegal />} />
    </Routes>
  );
};

export default AppRouter;