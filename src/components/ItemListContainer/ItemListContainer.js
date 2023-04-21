import { memo } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../service/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemListMemo = memo(ItemList);

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  const getProductsWithCategory = () => getProducts(categoryId);

  const {
    data: products,
    error,
    loading,
  } = useAsync(getProductsWithCategory, [categoryId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Vuelva a cargar la página</h1>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemListMemo products={products} />
    </div>
  );
};

export default ItemListContainer;
