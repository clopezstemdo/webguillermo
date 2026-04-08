import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Contacto from "../pages/Contacto"
import Servicios from "../pages/Servicios"
import SobreMi from "../pages/SobreMi"

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
        </Routes>
    )
}

export default AppRouter