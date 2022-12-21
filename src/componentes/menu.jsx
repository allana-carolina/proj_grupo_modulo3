import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Servicos from "../pages/servicos";
import Localizacao from "../pages/localizacao";
import Agendar from "../pages/agendar";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/home">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/localizacao">Localização</Link>
            </Nav.Link>

            <Nav.Link></Nav.Link>
            <NavDropdown title="Serviços" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/servicos">
                  <Link to="/servicos">Cortes</Link>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/">
                  <Link to="/pigmentacao">Pigmentações</Link>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>
              <Link to="/agendar">Agendar</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
