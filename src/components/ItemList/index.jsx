import Item from "../Item";
import "./style.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-container">
      {products.length ? (
        products.map((product) => {
          return <Item key={product.id} product={product} />;
        })
      ) : (
        <h2 className="fs-1 text-info mt-5">Loading... 🙄</h2>
      )}
    </div>
  );
};

export default ItemList;
