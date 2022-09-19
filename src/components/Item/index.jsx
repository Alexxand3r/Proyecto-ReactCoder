import "./style.css";
import { useNavigate } from "react-router-dom";

//Corresponde a la card del producto
const Item = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <div className="card-container col-md-3" onClick={handleNavigate}>
      <div className="h-100 text-center p-4">
        <img
          className="card-img-top mb-5"
          src={product.image}
          height={250}
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title mb-0 fs-2 text-info fw-bold">
            {product.title.substring(0, 15)}
          </h5>
          <h3 className="card-price mt-3">Precio: $ {product.price}</h3>
          <a href="#" className="btn btn-outline-dark fs-4 mt-3">
            Agregar al <i className="fa fa-shopping-cart me-1 fs-4"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
