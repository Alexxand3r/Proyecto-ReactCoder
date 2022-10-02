import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import ItemCount from "../ItemCount";
import { Shop } from "../../context/ShopProvider";

import "./style.css";

const ItemDetail = ({ product }) => {
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const { addItem } = useContext(Shop);

  const addCart = (quantity) => {
    setQty(quantity);
  };

  const handleFinish = () => {
    const productToSave = { ...product, quantity: qty };
    addItem(productToSave);
    navigate("/cart");
  };

  return (
    <div className="ms- 5 container my-5 border border-2 border-info rounded p-3">
      <div className="d-flex detail-img">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="ms-5 p-3 sub-container">
        <h1 className="text-center text-info fw-bold fs-1">{product.title}</h1>
        <p className="descripcion">{product.description}</p>
        <div className="d-flex">
          <h3 className="precio">$ {product.price}</h3>
          <h4 className="ms-5 mt-3">
            Stock Disponible:
            <span className="text-primary ms-2 fs-3">{product.stock}</span>{" "}
          </h4>
          <h5 className="fs-2 mt-2 ms-5">💗{product.rate}</h5>
        </div>
        <div className="ms-5">
          {qty ? (
            <button
              className="btn btn-info text-white fw-bold fs-3"
              onClick={handleFinish}
            >
              Finalizar Compra
            </button>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={addCart} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
