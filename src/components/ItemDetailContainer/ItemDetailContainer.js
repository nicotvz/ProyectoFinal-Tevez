import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getProductsById } from "../../service/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const getProductsWithId = () => getProductsById(itemId);

  const { data: product } = useAsync(getProductsWithId, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
