import React from "react";
import { NavLink } from "react-router-dom";
import '../Assets/styles/nav.css'

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <NavLink to="/" className="nav-link">LOGO</NavLink>
          {/* ACÁ VA UNA IMAGENNNNNNNN - EL LOGO DE LA PAGINA */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* BOTON DE LA HAMBURGUESA  */}
          
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
                <NavLink to="/" className="nav-link">Inicio</NavLink>
                <NavLink to="/novedades" className="nav-link">Novedades</NavLink>
                <NavLink to="/tienda" className="nav-link">Tienda</NavLink>
                <NavLink to="/perfil" className="nav-link">Perfil</NavLink>
                <NavLink to="/registro" className="nav-link">Cuenta</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
