const Team = () => {
  return (
    <>
      {/* Team*/}
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2
              className="section-heading text-uppercase wow animate__animated animate__flipInX"
              data-wow-duration="2s"
            >
              Our Amazing Team
            </h2>
            <h3
              className="section-subheading text-muted wow animate__animated animate__flash"
              data-wow-duration="2s"
            >
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            <div
              className="col-lg-4 wow animate__animated animate__flipInX"
              data-wow-duration="2s"
            >
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/1.jpg"
                  alt=""
                />
                <h4>Kay Garland</h4>
                <p className="text-muted">Lead Designer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 wow animate__animated animate__flipInX"
              data-wow-duration="2s"
            >
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/2.jpg"
                  alt=""
                />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Marketer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 wow animate__animated animate__flipInX"
              data-wow-duration="2s"
            >
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/3.jpg"
                  alt=""
                />
                <h4>Diana Petersen</h4>
                <p className="text-muted">Lead Developer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-8 mx-auto text-center wow animate__animated animate__pulse"
              data-wow-duration="2s"
            >
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
