import React, { useContext, useState } from "react";
import { Shop } from "../../context/ShopProvider";
import ordenGenerada from "../../services/generarOrden";

import { DataGrid } from "@mui/x-data-grid";
import { Button, CircularProgress } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, removeItem, clearCart, total } = useContext(Shop);

  const [loading, setLoading] = useState(false);

  const renderImage = (image) => {
    return (
      <img
        src={image.value}
        alt="cart-product"
        style={{ height: "120px" }}
      ></img>
    );
  };

  const renderRemoveButton = (item) => {
    const product = item.value;
    return (
      <Button
        onClick={() => removeItem(product)}
        variant="contained"
        color="error"
      >
        <i class="fa fa-times  fs-5"></i>
      </Button>
    );
  };

  const handleBuy = async () => {
    setLoading(true);
    const importeTotal = total();
    const orden = ordenGenerada(
      "Alexander",
      "Alelis123@gmail.com",
      2612123456,
      cart,
      importeTotal
    );
    console.log(orden);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "orders"), orden);

    //Actualizamos el stock del producto
    cart.forEach(async (productoEnCarrito) => {
      //Primero accedemos a la referencia del producto
      const productRef = doc(db, "products", productoEnCarrito.id);
      //Llamamos al snapshot, llamando a firebase
      const productSnap = await getDoc(productRef);
      //En snapshot.data() nos devuelve la información del documento a actualizar
      await updateDoc(productRef, {
        stock: productSnap.data().stock - productoEnCarrito.quantity,
      });
    });
    setLoading(false);

    Swal.fire({
      title: "Compra Confirmada ✔",
      text: `Orden Id: ${docRef.id} 😀 `,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJbrkJBEtHDIyxb1feZQan0nza1LCUlV6Dg&usqp=CAU",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Compra Confirmada",
      confirmButtonText: "Ok!",
    });
  };

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 250,
      renderCell: renderImage,
    },
    { field: "title", headerName: "Product", width: 450 },
    { field: "quantity", headerName: "Quantity", width: 80 },
    { field: "price", headerName: "Price", width: 80 },
    {
      field: "remove",
      headerName: "Remove",
      renderCell: renderRemoveButton,
      width: 120,
    },
  ];

  //Vamos a asignar un array con cada fila de la tabla, utilizando el cart
  const filas = [];
  cart.forEach((item) => {
    filas.push({
      id: item.id,
      image: item.image,
      title: item.title,
      quantity: item.quantity,
      price: `$ ${item.price * item.quantity}`,
      remove: item,
    });
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={filas}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        rowHeight={150}
      />

      <div className="d-flex justify-content-start mt-2">
        <Button
          onClick={clearCart}
          color="info"
          variant="contained"
          className="ms-5"
        >
          Clear cart<i className="fa fa-trash ms-2 fs-3"></i>
        </Button>
        {loading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <Button
            onClick={handleBuy}
            color="success"
            variant="contained"
            className="ms-5"
          >
            Confirmar compra <i className="fa fa-check ms-2 fs-3"></i>
          </Button>
        )}
        <h2 className="ms-5 fs-2">Total Compra : $ 123 </h2>
      </div>
    </div>
  );
};

export default Cart;
