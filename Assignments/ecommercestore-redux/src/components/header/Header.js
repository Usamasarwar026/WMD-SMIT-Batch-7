import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-white shadow-sm mb-3 py-3">
        <Container>
          <Navbar.Brand href="/">ECO Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                ECO Store
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-evenly flex-grow-1 pe-3 mt-2">
                <Nav.Link as={Link} to="/" className="fs-5 ">Home</Nav.Link>
                <Nav.Link as={Link} to="/products" className="fs-5">Products</Nav.Link>
                <Nav.Link as={Link} to="/about" className="fs-5">About</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="fs-5">Contact</Nav.Link>
                <Nav.Link as={Link} to="/addingproduct" className="fs-5">Add Product</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
    </>
  );
}

export default Header;
