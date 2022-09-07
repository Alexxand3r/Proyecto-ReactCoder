import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="border border-3 border-info nav_bar"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="fs-2 fw-bold text-info ms-4">
            <img
              className="me-2"
              src="../../assets/dbs2.jpg"
              alt="foto hero prueba"
              width={50}
            />
            Mi Carrito Coder
          </Navbar.Brand>

          <Nav className="d-flex justify-content-center fs-3">
            <Nav.Link href="/#">Inicio</Nav.Link>
            <Nav.Link href="/#">Productos</Nav.Link>
            <Nav.Link href="/#">Nosotros</Nav.Link>
            <Nav.Link href="/#">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget />
            <Form className="d-flex me-4">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2 fs-5 "
                aria-label="Buscar"
              />
              <Button variant="outline-info">
                <i className="fa fa-search"></i>
              </Button>
            </Form>
            <Button variant="outline-info me-2">
              {" "}
              <i className="fa fa-sign-in me-1"></i>Login
            </Button>
            <Button variant="outline-info me-3">
              {" "}
              <i className="fa fa-user-plus me-1"></i>Registrate
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
