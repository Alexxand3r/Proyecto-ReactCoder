import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";

import { db } from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  console.log(db);

  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  console.log(categoryId);

  useEffect(() => {
    (async () => {
      try {
        const q = categoryId
          ? query(
              collection(db, "products"),
              where("category", "==", categoryId)
            )
          : query(collection(db, "products"));

        const querySnapshot = await getDocs(q);
        const productosFirebase = [];

        querySnapshot.forEach((doc) => {
          productosFirebase.push({ id: doc.id, ...doc.data() });
        });
        console.log(productosFirebase);
        setProductos(productosFirebase);

        //   const response = await fetch(
        //     "https://fakestoreapi.com/products/category/" + categoryId
        // );
        // const productos = await response.json();
        // setProductos(productos);
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
