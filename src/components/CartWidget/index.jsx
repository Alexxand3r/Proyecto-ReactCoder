import React from "react";
import Button from "react-bootstrap/Button";

const CartWidget = () => {
  return (
    <div>
      <Button variant="outline-info me-3">
        {" "}
        <i className="fa fa-shopping-cart me-1"></i> ( 0 )
      </Button>
    </div>
  );
};

export default CartWidget;
