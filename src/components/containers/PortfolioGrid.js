const PortfolioGrid = () => {
  return (
    <>
      {/* Portfolio Grid*/}
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2
              className="section-heading text-uppercase wow animate__animated animate__flipInX"
              data-wow-duration="2s"
            >
              Portfolio
            </h2>
            <h3
              className="section-subheading text-muted wow animate__animated animate__flash"
              data-wow-duration="2s"
            >
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div
                className="portfolio-item wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/01-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Threads</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Illustration
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div
                className="portfolio-item wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/02-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Explore</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Graphic Design
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div
                className="portfolio-item wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/03-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Finish</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Identity
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div
                className="portfolio-item wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal4"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/04-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Lines</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Branding
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div
                className="portfolio-item wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal5"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/05-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Southwest</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Website Design
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="portfolio-item wow animate__animated animate__fadeInUp"
                data-wow-duration="2s"
              >
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal6"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/06-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Window</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Photography
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioGrid;
