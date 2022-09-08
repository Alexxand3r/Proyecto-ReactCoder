import React from "react";
import ItemCount from "../ItemCount";
import "./style.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="container my-5 border border-2 border-info rounded p-3">
      <div className="d-flex mt-5 detail-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="p-3 sub-container">
        <h2 className="text-center text-info fw-bold fs-1">{product.title}</h2>
        <p className="descripcion">{product.description}</p>
        <h2 className="precio">$ {product.price}</h2>

        <ItemCount />
      </div>
    </div>
  );
};

/*const ItemDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="product-detail" />
      <ItemCount />
    </div>
  );
};
*/
export default ItemDetail;
