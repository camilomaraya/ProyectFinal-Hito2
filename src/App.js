import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Novedades from "./Views/Novedades";
import Tienda from "./Views/Tienda";
import './Assets/styles/app.css'
import Registro from "./Views/Registro";
import InicioSesion from "./Views/InicioSesion";
import Perfil from "./Views/Perfil";
import Favoritos from "./Views/Favoritos";
import Publicaciones from "./Views/Publicaciones";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route end path="/" element={<Home />} />
          <Route end path="/novedades" element={<Novedades />} />
          <Route end path="/tienda" element={<Tienda />} />
          <Route end path="/registro" element={<Registro />} />
          <Route end path="/login" element={<InicioSesion />} />
          <Route end path="/perfil" element={<Perfil />} />
          <Route end path="/favoritos" element={<Favoritos />} />
          <Route end path="/publicaciones" element={<Publicaciones />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
