import React from "react";
import "./style.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1 className="item-list text-info mx-5">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
