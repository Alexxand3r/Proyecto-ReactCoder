import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import "./styles.css";

const CartWidget = () => {
  const { cart } = useContext(Shop);

  console.log(cart);
  return (
    <div className="cart-style d-flex justify-content-end me-5 mt-1 fs-1 text-info">
      <NavLink to="/cart" variant="me-3">
        {" "}
        <i className="fa fa-shopping-cart me-1 text-info" />
      </NavLink>
      <span className="text-info ms-1">
        {cart.length === 0 ? "" : cart.length}
      </span>
    </div>
  );
};

export default CartWidget;
