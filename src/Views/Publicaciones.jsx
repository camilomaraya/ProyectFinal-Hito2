import React from "react";
import Footer from "../Components/Footer";
import NavPrivado from "../Components/NavPrivado";

export default function Publicaciones() {
  return (
    <>
      <NavPrivado />
      <div className="mb-4 mt-5">
        
      </div>

      <div class="row ">
        <div class="col-lg-7 mx-auto">
          <div class="card mt-2 mx-auto p-4 bg-light">
          <h2 className="mx-auto">PUBLICA TU LIBRO</h2>
            <div class="card-body bg-light">
              <div class="container">
                <form>
                  <div class="controls">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Titulo del libro</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Ingresa el titulo del libro"
                            required
                            data-error="Ingresa el titulo porfavorcito."
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Autor</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Ingresa el nombre del autor*"
                            required
                            data-error="Lastname is required."
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Precio</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Ingresa el precio de venta*"
                            required data-error="Si es gratis, pon 0"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>
                            Ingresa forma de venta
                          </label>
                          <select
                            class="form-control"
                            required data-error="Selecciona la forma de distribuci??n"
                          >
                            <option value="" selected disabled>
                              --Selecciona la forma de venta--
                            </option>
                            <option>F??sico</option>
                            <option>Digital</option>
                            <option>Ambas</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Descripci??n</label>
                          <textarea
                            class="form-control"
                            placeholder="Escribe la descripci??n del producto"
                            rows="4"
                            required data-error="Escribe la descripci??n del texto"
                          ></textarea>
                        </div>
                      </div>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                        />
                        <label className="custom-file-label mx-5 my-4" for="customFile">
                          <strong>Sube el archivo en formato pdf</strong>
                        </label>
                      </div>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="customFile"
                        />
                        <label className="custom-file-label mx-5" for="customFile">
                          <strong>Sube la foto de portada</strong>
                        </label>
                      </div>
                      <div class="col-md-12 my-3">
                        <input
                          type="submit"
                          class="btn btn-success btn-send  pt-2 btn-block
                            "
                          value="Publicar Libro"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
