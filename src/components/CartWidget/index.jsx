import Button from "react-bootstrap/Button";

const CartWidget = () => {
  return (
    <div className=" d-flex justify-content-end me-5 mt-1">
      <Button variant="outline-info me-3">
        {" "}
        <i className="fa fa-shopping-cart me-1"></i> ( 0 )
      </Button>
    </div>
  );
};

export default CartWidget;
