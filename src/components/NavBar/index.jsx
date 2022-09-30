import { useState } from "react";
import { Link } from "react-router-dom";
import AuthContainer from "../../containers/AuthContainer";
import CartWidget from "../CartWidget";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./style.css";

const NavBar = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const handleLogin = () => {
    setLoginModal(true);
  };

  const handleSignup = () => {
    setSignupModal(true);
  };
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="border border-3 border-info nav_bar"
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="fs-2 fw-bold text-info ms-4 mt-2">
          <img
            className="me-2 "
            src="../../assets/logovenum2.jpg"
            alt="foto hero prueba"
            width={50}
          />
          Coder Fight Shop
        </Navbar.Brand>
        <Nav className="d-flex justify-content-center fs-3">
          <Link className="nav-link text-info" to="/">
            Inicio
          </Link>
          <Link className="nav-link" to="/category/mens">
            Hombre{" "}
          </Link>
          <Link className="nav-link" to="/category/women">
            Mujer
          </Link>
          <Link className="nav-link" to="/category/kids">
            Niños
          </Link>
          <Link className="nav-link " to="/category/articulos">
            Artículos
          </Link>
        </Nav>
        <Nav>
          <CartWidget />

          <Button variant="outline-info me-2" onClick={handleLogin}>
            {" "}
            <i className="fa fa-sign-in me-1"></i>Login
          </Button>
          <Button variant="outline-info me-3" onClick={handleSignup}>
            {" "}
            <i className="fa fa-user-plus me-1"></i>Registrate
          </Button>
        </Nav>
      </Container>
      {(loginModal || signupModal) && (
        <AuthContainer
          handleClose={() => {
            setLoginModal(false);
            setSignupModal(false);
          }}
          login={loginModal}
          signUp={signupModal}
        />
      )}
    </Navbar>
  );
};

export default NavBar;
