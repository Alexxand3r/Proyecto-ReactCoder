import Item from "../Item";
import "./style.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-container">
      {products.map((product) => {
        return <Item key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemList;
