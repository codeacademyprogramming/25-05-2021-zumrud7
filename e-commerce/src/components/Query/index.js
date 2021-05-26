export default function Query() {
  return (
    <section id="query">
      <div className="pattern bg">
        <img src={`${process.env.PUBLIC_URL}/images/veg.png`} alt="" />
      </div>
      <div className="pattern q-bg">
        <img src={`${process.env.PUBLIC_URL}/images/q-bg.png`} alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="section-title">
              Fill out the form and we will call you
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <form action="">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Phone number" />
              <button className="btn-orange">
                Call Back <i className="fa fa-long-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="photo">
              <img src={`${process.env.PUBLIC_URL}/images/car.jpg`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
