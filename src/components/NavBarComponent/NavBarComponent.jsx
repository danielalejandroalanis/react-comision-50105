import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";

import { Link } from "react-router-dom";
import { ProductsData } from "../../data/productsData";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Tienda Daniel
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {ProductsData.map((product) => {
                return (
                  <NavDropdown.Item key={product.id}>
                    <Link
                      to={`/category/${product.category}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {product.category}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
