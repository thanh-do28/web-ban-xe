import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-light'>
        <div class='container-fluid'>
          <a class='text-light' href='#'>
            Navbar
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Link
                </a>
              </li>
              <li class='nav-item dropdown'>
                <div class='dropdown'>
                  <button
                    class='btn btn-dropdow dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Dropdown button
                  </button>
                  <div
                    class='dropdown-menu'
                    aria-labelledby='dropdownMenuButton'
                  >
                    <a class='dropdown-item' href='#'>
                      Action
                    </a>
                    <a class='dropdown-item' href='#'>
                      Another action
                    </a>
                    <a class='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </div>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link disabled'
                  href='#'
                  tabindex='-1'
                  aria-disabled='true'
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form class='d-flex'>
              <input
                class='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              ></input>
              <button class='btn btn-outline-success' type='submit'>
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
