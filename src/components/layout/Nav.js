const Nav = () => {
  return (
    <>
      {/* Navigation*/}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a
            className="navbar-brand js-scroll-trigger wow animate__animated animate__zoomIn"
            data-wow-duration="2s"
            href="#page-top"
          >
            <img src="assets/img/navbar-logo.svg" alt="" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ml-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul
              className="navbar-nav text-uppercase ml-auto wow animate__animated animate__fadeInRight"
              data-wow-duration="2s"
            >
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
