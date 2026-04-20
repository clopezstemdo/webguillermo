import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Servicios from "../pages/Servicios";
import SobreMi from "../pages/SobreMi";
import Social from "../pages/social";
import AvisoLegal from "../pages/AvisoLegal";

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