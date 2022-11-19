import '../Assets/styles/footer.css'
export default function Footer() {
  return (
    <>
     <hr className="footer" />
      <div class="text-center text-lg-start container">
        <div class="container text-center text-start mt-5">
          <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="fw-bold mb-4">TRABAJA CON NOSOTROS</h6>
            </div>
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="fw-bold mb-4">BOOKSWAP</h6>
              <p>Los libros puestos a la venta en esta página web son de exclusiva responzabilidad de quienes los ponen a la venta.</p>
            </div>
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="fw-bold mb-4">CONTACTO</h6>
              <p>Angamos #370 - La Serena</p>
              <p>contacto@bookswap.com</p>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between px-1 mt-1 mb-1">
            <p>BookSwap | &copy; Todos los derechos reservados - 2022</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
