import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
//import * as bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import ShopProvider from "./context/ShopProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopProvider>
    <App />
  </ShopProvider>
);
