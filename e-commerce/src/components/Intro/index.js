export default function Intro() {
  return (
    <section id="intro">
      <div className="pattern-icon vegetable">
        <img src={`${process.env.PUBLIC_URL}/images/vegitable.png`} alt="" />
      </div>
      <div className="pattern-icon bg">
        <img src={`${process.env.PUBLIC_URL}/images/intro-bg.png`} alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <h1 className="section-title">Food delivery in Kovel</h1>
            <p className="section-subtitle">
              If you decide to relax or have unexpected guests, call us. We make
              sure that your vacation is comfortable, enjoyable and delicious
            </p>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-9">
            <div className="photo">
              <img src={`${process.env.PUBLIC_URL}/images/piza.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
