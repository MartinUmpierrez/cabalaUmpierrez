
const Navbar = () => {
    return(
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <nav class="menu__principal navbar navbar-expand-lg navbar-dark fixed-top bg-secondary">
        <div class="container-fluid">
          
          <h3>Cabala</h3>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./secciones/contacto.html">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./secciones/nosotros.html">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./secciones/productos.html">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./secciones/preguntas.html">Preguntas</a>
              </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button class="btn btn-outline-dark h-25 m-auto" type="submit">Buscar</button>
              </form>
          </div>
        </div>
      </nav> 

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </>
        
    )
}

export default Navbar