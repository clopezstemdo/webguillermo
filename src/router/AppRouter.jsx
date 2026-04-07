import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Contacto from "../pages/Contacto"
import Servcios from "../pages/Servicios"

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/servicios" element={<Servcios />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter