export default function Navbar(){
    return(
        <header>
        <div className="container">
          <div className="header-wrapper">
            <nav>
              <a href="/" className="nav-link">Payment</a>
              <a href="/" className="nav-link">About Us</a>
              <a href="/" className="nav-link">Contacts</a>
            </nav>
            <a href="/" className="logo">
              <img src="assets/images/logos.svg" alt="" />
            </a>
            <div className="contact">
              <p className="opening-hours">Daily 11am - 9pm</p>
              <div className="phone">
                <div className="icon">
                  <img src="/assets/images/phone.svg" alt="" />
                </div>
                <p>0 800 33 08 98</p>
              </div>
            </div>
            <div className="ham-menu"><i className="fa fa-bars"></i></div>
          </div>
        </div>
      </header>
    )
}