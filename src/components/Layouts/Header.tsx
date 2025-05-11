import { useState,useEffect } from "react";
import { Container, Nav, Navbar, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";
import {MapPin,Wallet,LocateFixed} from "lucide-react"

const Header = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  // Scroll Navbar
 useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      setNav(scrollValue > 100);
    };

    window.addEventListener("scroll", changeValueOnScroll);

    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
               <div className="mainsearch">
                <MapPin className="map" size={20}/>
                <input type="text" className="inputBox" placeholder="Search location"onClick={() => setShowMapModal(true)} />
               </div>
              <Nav.Link className="wallettext" as={Link} to="/">
                <Wallet className="wallet"/> Wallet
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                 <Wallet/>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
              <div className="login" onClick={handleLoginClick}>
                <span className="text">Login</span>
              </div>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* google map  */}
      <Modal show={showMapModal} onHide={() => setShowMapModal(false)} centered>
      <Modal.Header closeButton>
        {/* You can add a header here if needed */}
             <div className="modalDiv">
                <MapPin className="ModalIcon" size={20}/>
                <input type="text" className="ModalMap" placeholder="Search location"/>
                <LocateFixed className="locate" size={20}/>
               </div>
      </Modal.Header>
      <Modal.Body>
        <iframe className="GoogleMap"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14031.753308343059!2d77.71085739648724!3d28.45127545682825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sin!4v1714060475320!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Modal.Body>
    </Modal>

      {/* Login Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered className="modals">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="bodyModal">
<section>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="mb-5">
          <h2 className="display-5 fw-bold text-center">Sign in</h2>
          <p className="text-center m-0">Don't have an account? <a href="#!">Sign up</a></p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10 col-xl-8">
        <div className="col gy-5 justify-content-center">
          <div className="col-12 col-lg-5" style={{width:"auto"}}>
            <form action="#!">
              <div className="row overflow-hidden">
                <div className="col-12 ">
                  <div className="form-floating mb-3 inputf">
                    <input type="email" className="form-control border-0 border-bottom rounded-0" name="email" id="email" placeholder="name@example.com" required/>
                    <label htmlFor="email" className="form-label">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control border-0 border-bottom rounded-0" name="password" id="password" value="" placeholder="Password" required/>
                    <label htmlFor="password" className="form-label">Password</label>
                  </div>
                </div>
                <div className="col-12" style={{marginBottom:"15px"}}>
                  <div className="row justify-content-between">
                    <div className="col-6">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me"/>
                        <label className="form-check-label text-secondary" htmlFor="remember_me">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-end">
                        <a href="#!" className="link-secondary text-decoration-none">Forgot password?</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">Log in</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center gap-3 flex-lg-column" style={{width:"auto"}}>
            <div className="bg-dark h-100 d-none d-lg-block" style={{width: "1px", opacity:"0.1"}}></div>
            <div className="bg-dark w-100 d-lg-none" style={{height: "1px", opacity:"0.1"}}></div>
            <div>or</div>
            <div className="bg-dark h-100 d-none d-lg-block" style={{width: "1px", opacity:"0.1"}}></div>
            <div className="bg-dark w-100 d-lg-none"style={{height: "1px", opacity:"0.1"}}></div>
          </div>
          <div className="col-12 col-lg-5 d-flex align-items-center" style={{width:"auto"}}>
            <div className="d-flex gap-3 flex-column w-100 ">
              <a href="#!" className="btn btn-lg btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                <span className="ms-2 fs-6">Sign in with Google</span>
              </a>
              <a href="#!" className="btn btn-lg btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <span className="ms-2 fs-6">Sign in with Facebook</span>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {/* Add additional buttons or actions here */}
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
