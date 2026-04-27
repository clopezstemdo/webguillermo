import { Routes, Route } from "react-router-dom"
import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Contacto from "../pages/Contacto";
import Servicios from "../pages/Servicios";
import SobreMi from "../pages/SobreMi";
import AvisoLegal from "../pages/AvisoLegal";
import PoliticaPrivacidad from "../pages/PoliticaPrivacidad";

const AppRouter = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/avisolegal" element={<AvisoLegal />} />
      <Route path="/politicaprivacidad" element={<PoliticaPrivacidad />} />
    </Routes>
  );
};

export default AppRouter;