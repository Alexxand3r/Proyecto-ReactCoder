import "./style.css";
import { useNavigate } from "react-router-dom";

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
          height={350}
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title mb-0  text-primary">
            {product.title.substring(0, 25)}
          </h5>
          <h3 className="card-price mt-3">Precio: $ {product.price}</h3>
          <h4 className="mt-2">
            Stock Disponible:
            <span className="text-primary ms-2 fs-3">{product.stock}</span>{" "}
          </h4>

          <a href="#/" className="btn btn-primary fs-4 mt-3">
            Ver <i className="fa fa-plus me-1 fs-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
