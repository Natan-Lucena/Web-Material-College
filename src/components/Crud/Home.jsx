import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ margin: 0 }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="http://www.bootstrap.com">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="http://www.bootstrap.com">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="/"
                >
                  Professor
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="professor/read">
                      Listar professor
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="professor/create">
                      Criar professor
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="/"
                >
                  Aluno
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="aluno/create">
                      Criar aluno
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link className="dropdown-item" to="aluno/read">
                      Ler Alunos
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
