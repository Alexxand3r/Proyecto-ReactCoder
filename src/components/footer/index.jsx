import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border border-info border-4 p-2 mt-5">
      <div className="container-xl">
        <div className="row align-items-center">
          <div className="col-3">
            <img
              className="mt-2"
              src="../../assets/venum.webp"
              alt="imagen venum"
              width={320}
            />
          </div>

          <div className="col-3">
            <nav className="fs-4 fw-bold">
              <Link className="nav-link text-info" to="/">
                Inicio
              </Link>
              <Link className="nav-link" to="/category/mens">
                Hombre{" "}
              </Link>
              <Link className="nav-link" to="/category/women">
                Mujer
              </Link>
              <Link className="nav-link " to="/category/kids">
                Niños
              </Link>
              <Link className="nav-link " to="/category/articulos">
                Artículos
              </Link>
            </nav>
          </div>
          <div className="col-3 d-flex flex-column">
            <img
              className="my-2 "
              src="../../assets/footerlogo2.avif"
              alt="imagen venum"
              width={200}
            />
            <img
              className="mt-2"
              src="../../assets/footerlogo1.webp"
              alt="imagen venum"
              width={200}
            />
          </div>
          <div className="col-3 d-flex flex-column">
            <img
              className="mt-2"
              src="../../assets/gplay.webp"
              alt=""
              width={160}
            />
            <img
              className="mt-2"
              src="../../assets/apple.webp"
              alt=""
              width={160}
            />
          </div>
        </div>
        <p className="text-center p-2 mt-2 bg-light fw-bold fs-3">
          {" "}
          Todos los derechos reservados ™😋 Alexander De Simone®😁
        </p>
      </div>
    </footer>
  );
};

export default Footer;
