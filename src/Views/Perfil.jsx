import Footer from "../Components/Footer";
import NavPrivado from "../Components/NavPrivado";

export default function Perfil() {
  return (
    <>
      <NavPrivado />
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="..."
              />
              <span class="font-weight-bold">Esto</span>
              <span class="text-black-50">Es un ejemplooo</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Completa tu perfil</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ingresa tu nombre"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Apellidos</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="Ingresa tus Apellidos"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Número de telefono</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="+569-XXXXXXXX"
                    value=""
                  />
                </div>
                <div class="col-md-12 mt-3">
                  <label class="labels">Dirección</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ingresa tu dirección de despacho"
                    value=""
                  />
                </div>
                <div class="col-md-12 mt-3">
                  <label class="labels">Ciudad</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="¿Donde vives?"
                    value=""
                  />
                </div>
              </div>
              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button">
                  Guardar
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>Si eres autor agrega tus datos </span>
                <span class="border px-3 p-1 add-experience">
                  <i class="fa fa-plus"></i>&nbsp;
                </span>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
