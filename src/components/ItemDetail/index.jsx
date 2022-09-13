import React, { useState } from "react";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ItemDetail = ({ product }) => {
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const addCart = (quantity) => {
    setQty(quantity);
  };

  const handleFinish = () => {
    navigate("/cart");
  };

  console.log(qty);

  return (
    <div className="container my-5 border border-2 border-info rounded p-3">
      <div className="d-flex mt-5 detail-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="p-3 sub-container">
        <h2 className="text-center text-info fw-bold fs-1">{product.title}</h2>
        <p className="descripcion">{product.description}</p>
        <h3 className="precio">$ {product.price}</h3>

        {qty ? (
          <button
            className="btn btn-info text-white fw-bold fs-3"
            onClick={handleFinish}
          >
            Finalizar Compra
          </button>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={addCart} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
