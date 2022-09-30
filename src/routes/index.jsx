import React from "react";
import NotFound from "../components/NotFound";
import Cart from "../containers/CartContainer";
import NavBar from "../components/NavBar";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
