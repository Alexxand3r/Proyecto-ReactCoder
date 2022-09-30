import { useParams } from "react-router-dom";

import ItemList from "../../components/ItemList";
import Spinner from "../../components/Spinner";

import useFirebase from "../../hooks/useFirebase";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [loading, productos, error] = useFirebase(categoryId);

  return (
    <>
      {loading ? <Spinner /> : <ItemList products={productos} />}
      {error && <h2>{error}</h2>}
    </>
  );
};

export default ItemListContainer;
