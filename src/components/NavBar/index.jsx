import CartWidget from "../CartWidget";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
//import { Shop } from "../../context/ShopProvider";
import AuthContainer from "../../containers/AuthContainer";

const NavBar = () => {
  //Nombre del estado, setNombreDelEstado

  // const value = useContext(Shop)

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
        <Navbar.Brand
          href="#home"
          className="fs-2 fw-bold text-danger ms-4 mt-2"
        >
          <img
            className="me-2"
            src="../../assets/dbs2.jpg"
            alt="foto hero prueba"
            width={50}
          />
          Mi Carrito Coder
        </Navbar.Brand>
        <Nav className="d-flex justify-content-center fs-3">
          <Link className="nav-link text-info" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/category/men's clothing">
            Men's clothing
          </Link>
          <Link className="nav-link" to="/category/women's clothing">
            Women's clothing
          </Link>
          <Link className="nav-link" to="/category/electronics">
            Electronics
          </Link>
          <Link className="nav-link " to="/category/jewelery">
            Jewelery
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
