import { NavLink } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import '../Assets/styles/login.css'

export default function InicioSesion() {
  return (
    <>
      <Nav />
      <div class="container-fluid my-2 ps-md-0">
        <div class="row g-0">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h1>Bienvenido</h1>
                    <h5>Inicia sesión con tu cuenta de BOOKSWAP</h5>
                    {/* <!-- Sign In Form --> */}
                    <form>
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Correo electronico</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          type="password"
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">Contraseña</label>
                      </div>

                      <div class="d-grid">
                        <button
                          class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          Inicia Sesión
                        </button>
                        <div class="text-center">
                          <h6>
                          ¿No tienes una cuenta?, <NavLink to="/registro" className="links">crea tu cuenta</NavLink>
                          </h6>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
