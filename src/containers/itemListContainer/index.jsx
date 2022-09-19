import React, { useEffect, useState } from "react";
// import { products } from '../../data/products';
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
//import Home from "../../components/Home/Home";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  console.log(categoryId);

  useEffect(() => {
    (async () => {
      try {
        if (categoryId) {
          const response = await fetch(
            "https://fakestoreapi.com/products/category/" + categoryId
          );
          const productos = await response.json();
          setProductos(productos);
        } else {
          const response = await fetch("https://fakestoreapi.com/products");
          const productos = await response.json();
          setProductos(productos);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  return (
    <>
      {/* <Home />*/}
      <h1 className="text-center text-danger fw-bold  mt-3">Latest Products</h1>
      <ItemList products={productos} />;
    </>
  );
};

export default ItemListContainer;
