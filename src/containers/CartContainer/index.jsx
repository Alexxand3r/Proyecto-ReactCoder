import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ordenGenerada from "../../services/generarOrden";
import { Shop } from "../../context/ShopProvider";

import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

import { DataGrid } from "@mui/x-data-grid";
import { Button, CircularProgress } from "@mui/material";
import Swal from "sweetalert2";

const Cart = () => {
  const navigate = useNavigate();
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
        <i className="fa fa-times  fs-5"></i>
      </Button>
    );
  };

  const handleBuy = async () => {
    setLoading(true);
    const importeTotal = total();

    Swal.fire({
      title: "Login Form",
      html: ` 
        <input type="text" id="login" class="swal2-input" placeholder="Name">
        <input type="tel" id="tel" class="swal2-input" placeholder="Phone Number">
        <input type="email" id="email" class="swal2-input" placeholder="Email">
        `,
      confirmButtonText: "Send",
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector("#login").value;
        const email = Swal.getPopup().querySelector("#email").value;
        const tel = Swal.getPopup().querySelector("#tel").value;
        const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$/;
        const regexEmail =
          /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
        const regexTel =
          /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
        if (!login || !email || !tel)
          Swal.showValidationMessage(`Please enter complete all the fields`);
        if (!regexName.test(login))
          Swal.showValidationMessage(`You have to enter a valid name`);
        if (!regexEmail.test(email))
          Swal.showValidationMessage(`You have to enter a valid email`);
        if (!regexTel.test(tel))
          Swal.showValidationMessage(`Please enter a valid phone number`);

        return { login: login, email: email, tel: tel };
      },
    })
      .then((result) => {
        const orden = ordenGenerada(
          result.value.login,
          result.value.email,
          result.value.tel,
          cart,
          importeTotal
        );

        const docRef = addDoc(collection(db, "orders"), orden);

        cart.forEach(async (productoEnCarrito) => {
          const productRef = doc(db, "products", productoEnCarrito.id);

          const productSnap = await getDoc(productRef);

          await updateDoc(productRef, {
            stock: productSnap.data().stock - productoEnCarrito.quantity,
          });

          console.log(docRef);
        });

        setLoading(false);

        Swal.fire({
          title: "Compra Confirmada ✔",
          text: `Nombre: ${result.value.login}
        Email: ${result.value.email}
        Tel: ${result.value.tel}
        😀 Total: 💲${total()}
       
      `.trim(),

          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJbrkJBEtHDIyxb1feZQan0nza1LCUlV6Dg&usqp=CAU",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Compra Confirmada",
          confirmButtonText: "Ok!",
        });

        clearCart();
        setLoading(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((e) => {
        Swal.fire("Error", e);
        setLoading(false);
      });
  };

  const columns = [
    {
      field: "image",
      headerName: "imagen",
      width: 250,
      renderCell: renderImage,
    },
    { field: "title", headerName: "Articulo", width: 450 },
    { field: "quantity", headerName: "Cantidad", width: 80 },
    { field: "price", headerName: "Costo", width: 80 },
    {
      field: "remove",
      headerName: "Borrar",
      renderCell: renderRemoveButton,
      width: 120,
    },
  ];

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

      <div className="d-flex justify-content-start mb-5">
        <Button
          onClick={clearCart}
          color="info"
          variant="contained"
          className="ms-5"
        >
          Borrar Todo<i className="fa fa-trash ms-2 fs-3"></i>
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
            className="mx-5"
          >
            Confirmar compra <i className="fa fa-check ms-2 fs-3"></i>
          </Button>
        )}

        <h3 className="me-5">
          <strong className="">
            Total: $<b>{total()}.-</b>
          </strong>
        </h3>
      </div>
    </div>
  );
};

export default Cart;
