
import {ItemListContainer, LoaderComponent} from "../components";
import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../hooks/useProducts";

export const Category = () => {
  const { categoryId } = useParams();

  const { products, loading, error } = useProductsByCategory(categoryId)


  return (
    loading ? <LoaderComponent /> : <ItemListContainer products={products} />
  );
};
