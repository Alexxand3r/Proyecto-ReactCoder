import React, { useState } from "react";
import "./style.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount((count) => count + 1);
    } else {
      alert("⚠ No hay suficiente stock disponible");
    }
  };

  const handleDecrement = () => {
    if (count >= 1) {
      setCount((count) => count - 1);
    }
  };

  const addCart = () => {
    onAdd(count);
    setCount(initial);
  };

  return (
    <div className="contenedor-botones">
      <button
        className="botones btn btn-info text-white fs-4 px-3 fw-bold"
        onClick={handleDecrement}
      >
        -
      </button>
      <h2 className="mx-3 my-3">{count}</h2>
      <button
        className="botones btn btn-info text-white fs-4 fw-bold"
        onClick={handleAdd}
      >
        +
      </button>
      <button
        className="botones btn btn-info text-white fs-4 fw-bold"
        onClick={addCart}
      >
        <i class="fa fa-cart-plus" aria-hidden="true"></i> Agregar
      </button>
    </div>
  );
};

export default ItemCount;
