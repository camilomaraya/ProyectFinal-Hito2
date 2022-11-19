

export default function PostNovedades() {
  return (
    <>
      <div className="container">
        <h1 className="my-4">
          Novedades
        </h1>
        <div class="row">
          <div class="col-md-3">
            <a href="/">
              <img class="img-fluid rounded mb-3 mb-md-0"
                src="https://images.cdn1.buscalibre.com/fit-in/360x360/2f/cf/2fcfe3fdd192096e01ee8522f3b5a164.jpg" alt="..." />
            </a>
          </div>
          <div class="col-md-6">
            <h3>Titulo 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium veniam exercitationem expedita laborum at voluptate.
              Labore, voluptates totam at aut nemo deserunt rem magni pariatur
              quos perspiciatis atque eveniet unde. </p>
            <a class="btn btn-primary" href="/">
              Leer
            </a>
          </div>
        </div>

        <hr />

        <div class="row">
          <div class="col-md-3">
            <a href="/">
              <img
                class="img-fluid rounded mb-3 mb-md-0"
                src="https://images.cdn1.buscalibre.com/fit-in/360x360/2f/cf/2fcfe3fdd192096e01ee8522f3b5a164.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="col-md-6">
            <h3>Titulo 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium veniam exercitationem expedita laborum at voluptate.
              Labore, voluptates totam at aut nemo deserunt rem magni pariatur
              quos perspiciatis atque eveniet unde.
            </p>
            <a class="btn btn-primary" href="/">
              Leer
            </a>
          </div>
        </div>

        <hr />

        {/* <!-- Novedad 3 --> */}
        <div class="row">
          <div class="col-md-3">
            <a href="/">
              <img
                class="img-fluid rounded mb-3 mb-md-0"
                src="https://images.cdn3.buscalibre.com/fit-in/360x360/97/b2/97b2287a8cbfcda6fcf1ad6ed3d86af0.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="col-md-6">
            <h3>Titulo 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium veniam exercitationem expedita laborum at voluptate.
              Labore, voluptates totam at aut nemo deserunt rem magni pariatur
              quos perspiciatis atque eveniet unde.
            </p>
            <a class="btn btn-primary" href="/">
              Leer
            </a>
          </div>
        </div>

        <hr />

        {/* <!-- Project Four --> */}
        <div class="row">
          <div class="col-md-3">
            <a href="/">
              <img
                class="img-fluid rounded mb-3 mb-md-0"
                src="https://images.cdn3.buscalibre.com/fit-in/360x360/97/b2/97b2287a8cbfcda6fcf1ad6ed3d86af0.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="col-md-6">
            <h3>Titulo 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium veniam exercitationem expedita laborum at voluptate.
              Labore, voluptates totam at aut nemo deserunt rem magni pariatur
              quos perspiciatis atque eveniet unde.
            </p>
            <a class="btn btn-primary" href="/">
              Leer
            </a>
          </div>
        </div>


        <hr />

        {/* <!-- Paginación --> */}
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="/" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
      
    </>
  );
}
