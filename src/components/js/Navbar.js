import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/Navbar.css"; // Import your custom CSS file
import navlogo from "../../crane-svgrepo-com.svg";

function MyNavbar() {
  return (
    <>
      <div className="alert alert-light text-center mb-0" role="alert">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fab fa-facebook" style={{ color: "#3b5998" }}></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fab fa-x-twitter" style={{ color: "#000000" }}></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fab fa-instagram" style={{ color: "#E4405F" }}></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fab fa-linkedin" style={{ color: "#0077b5" }}></i>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fab fa-youtube" style={{ color: "#FF0000" }}></i>
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fab fa-pinterest" style={{ color: "#E60023" }}></i>
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <i className="fab fa-tiktok" style={{ color: "#000000" }}></i>
        </a>
      </div>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="nav-logo">
            <img
              src={navlogo}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
            />
            <small>
              <sub>
                <strong>Arden </strong>
              </sub>

              <sub> Constructions Limited</sub>
            </small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
              <Nav.Link href="#pricing">Our Products</Nav.Link>
              <Nav.Link href="#pricing">Projects</Nav.Link>
              <Nav.Link href="#pricing">Arden Jobs</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
