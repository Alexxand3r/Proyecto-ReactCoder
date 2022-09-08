import React, { useState, useEffect } from "react";
import "./style.css";

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
    <div className="contenedor-botones">
      <button className="botones btn btn-info" onClick={handleDecrement}>
        -
      </button>
      <h2>{count}</h2>
      <button className="botones btn btn-info" onClick={handleAdd}>
        +
      </button>
      <button className="botones btn btn-info" onClick={addCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
