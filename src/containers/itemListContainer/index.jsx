import React from "react";
import "./style.css";
import ItemCount from "../../components/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const agregarAlCarrito = (cantidad) => {
    alert(`✔ Agregaste  " ${cantidad} Productos " en Total al Carrito`);
  };
  return (
    <div>
      <h1 className="item-list text-info mx-5">{greeting}</h1>
      <ItemCount initial={1} stock={10} onAdd={agregarAlCarrito} />
    </div>
  );
};

export default ItemListContainer;
