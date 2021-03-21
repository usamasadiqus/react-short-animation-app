const Header = () => {
  return (
    <>
      {/* Masthead*/}
      <header className="masthead">
        <div className="container">
          <div
            className="masthead-subheading wow animate__animated animate__flipInX"
            data-wow-duration="2s"
          >
            Welcome To Our Studio!
          </div>
          <div
            className="masthead-heading text-uppercase wow animate__animated animate__flipInX"
            data-wow-duration="2s"
          >
            It's Nice To Meet You
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger wow animate__animated animate__fadeInUp"
            data-wow-duration="2s"
            href="#services"
          >
            Tell Me More
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
