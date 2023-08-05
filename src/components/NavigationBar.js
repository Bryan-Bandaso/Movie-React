import { Navbar, Nav, Container } from "react-bootstrap";
import "../style/navbar.css";

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand className="navbar-logo">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Link className="nav-link" href="#marvel">
                Marvel
              </Nav.Link>
              <Nav.Link className="nav-link" href="#dc">
                Dc
              </Nav.Link>
              <Nav.Link className="nav-link" href="#anime">
                Anime
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
