const Footer = () => {
  return (
    <>
      {/* Footer*/}
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-4 text-lg-left wow animate__animated animate__fadeInLeft"
              data-wow-duration="2s"
            >
              Copyright © Your Website 2020
            </div>
            <div
              className="col-lg-4 my-3 my-lg-0 wow animate__animated animate__zoomIn"
              data-wow-duration="2s"
            >
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
            <div
              className="col-lg-4 text-lg-right wow animate__animated animate__fadeInRight"
              data-wow-duration="2s"
            >
              <a className="mr-3" href="#!">
                Privacy Policy
              </a>
              <a href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
