import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-navbar">
          <div>
            <a
              class="name-shop nav-link text-light"
              href="http://localhost:3000/"
            >
              <i>THANHDOMOTO.COM</i>
            </a>
          </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  TRANG CHỦ
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/introduce">
                  GIỚI THIỆU
                </Link>
              </li>
              <li class="nav-item dropdown">
                <div class="dropdown">
                  <button
                    class="btn-dropdow dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    XPKL
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Honda
                    </a>
                    <a class="dropdown-item" href="#">
                      Kawasaki
                    </a>
                    <a class="dropdown-item" href="#">
                      Yamaha
                    </a>
                    <a class="dropdown-item" href="#">
                      Suzuki
                    </a>
                    <a class="dropdown-item" href="#">
                      BMW
                    </a>
                    <a class="dropdown-item" href="#">
                      Ducati
                    </a>
                    <a class="dropdown-item" href="#">
                      Xe Cũ
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-light"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  DỊCH VỤ
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-light"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  LIÊN HỆ
                </a>
              </li>
            </ul>
            <form class="form-search d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
