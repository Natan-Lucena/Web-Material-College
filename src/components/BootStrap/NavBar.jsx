import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  return (
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
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="/">ação 1</a>
                </li>
                <li className="dropdown-item">
                  <a href="/">ação 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
