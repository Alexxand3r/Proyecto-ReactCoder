import React, { useEffect, useState } from "react";
import "./style.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("no hay stock disponible");
    }
  };

  const handleRest = () => {
    if (count <= 0) {
      alert("⚠ Ingresa Cantidades Superiores a 0");
    } else {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    console.log("Se monto el ItemCount");
  }, []);
  useEffect(() => {
    console.log("se actualiza el estado");
  }, [count]);

  return (
    <div className="container border border-3 border-info rounded-pill my-5 p-5">
      <div>
        <h2 className="display bg-light rounded-pill p-5">{count}</h2>
      </div>
      <div className="contenedor-botones bg-light rounded-pill">
        <button className="botones btn btn-dark text-info" onClick={handleAdd}>
          {" "}
          +{" "}
        </button>
        <button className="botones btn btn-dark text-info" onClick={handleRest}>
          {" "}
          -{" "}
        </button>
        <button
          className="botones btn btn-dark text-info"
          onClick={() => onAdd(count)}
        >
          {" "}
          Agregar Al Carrito{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
