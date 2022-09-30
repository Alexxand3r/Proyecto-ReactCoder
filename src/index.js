import React from "react";
import ReactDOM from "react-dom/client";
import ShopProvider from "./context/ShopProvider";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopProvider>
    <App />
  </ShopProvider>
);
