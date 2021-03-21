const Services = () => {
  return (
    <>
      {/* Services*/}
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2
              className="section-heading text-uppercase wow animate__animated animate__flipInX"
              data-wow-duration="2s"
            >
              Services
            </h2>
            <h3
              className="section-subheading text-muted wow animate__animated animate__flash"
              data-wow-duration="2s"
            >
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row text-center">
            <div
              className="col-md-4 wow animate__animated animate__lightSpeedInLeft"
              data-wow-duration="2s"
            >
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
              </span>
              <h4 className="my-3">E-Commerce</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div
              className="col-md-4 wow animate__animated animate__fadeInUp"
              data-wow-duration="2s"
            >
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-laptop fa-stack-1x fa-inverse" />
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div
              className="col-md-4 wow animate__animated animate__lightSpeedInRight"
              data-wow-duration="2s"
            >
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-lock fa-stack-1x fa-inverse" />
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
