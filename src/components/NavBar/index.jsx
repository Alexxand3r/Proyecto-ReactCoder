import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="border border-3 border-info">
        <Container fluid>
          <Navbar.Brand href="#home" className="fs-2 fw-bold text-info ms-4">
            Mi Carrito Coder
          </Navbar.Brand>
          <Nav className="d-flex justify-content-center fs-3">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-info me-2">login</Button>
            <Button variant="outline-info me-3">registrate</Button>

            <Form className="d-flex me-4">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2 fs-5 "
                aria-label="Buscar"
              />
              <Button variant="outline-info">Buscar</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
