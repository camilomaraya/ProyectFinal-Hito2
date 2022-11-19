export default function CardsTienda() {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="https://contrapunto.cl/23995/historia-freak-del-futbol.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Libro 1</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>$20.000</p>
            </div>
            <div class="card-footer text-center -">
            <button className="btn btn-outline-danger">Ver más</button>
              <i class="fa-solid fa-cart-shopping mx-4"></i>
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://contrapunto.cl/22967/atlas-del-cielo-del-infierno-y-del-mas-alla.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>$20.000</p>
            </div>
            <div class="card-footer text-center">
            <button className="btn btn-outline-danger">Ver más</button>
              <i class="fa-solid fa-cart-shopping mx-4"></i>
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://contrapunto.cl/24731/van-gogh-obra-pictorica-completa.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>$20.000</p>
              
            </div>
            <div class="card-footer text-center">
            <button className="btn btn-outline-danger">Ver más</button>
              <i class="fa-solid fa-cart-shopping mx-4"></i>
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
