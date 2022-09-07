import React, { useState, useEffect } from "react";
import "./style.css";
import "../../data/products";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("No hay suficiente stock disponible");
    }
  };

  const handleDecrement = () => {
    //Desarrollo del decrement
  };

  const addCart = () => {
    onAdd(count);
    setCount(initial);
  };

  useEffect(() => {
    console.log("Se montó el ItemCount");
  }, []);

  useEffect(() => {
    console.log("Se actualiza el estado!");
  }, [count]);

  return (
    <div className="border border-1 border-info rounded contenedor-botones bg-light rounded p-3">
      <button
        className="botones btn btn-dark text-info"
        onClick={handleDecrement}
      >
        {" "}
        -{" "}
      </button>
      <h2>{count}</h2>
      <button className="botones  btn btn-dark text-info" onClick={handleAdd}>
        +
      </button>
      <button className="botones btn btn-dark text-info" onClick={addCart}>
        <i className="fa fa-shopping-cart me-1"></i>
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;
