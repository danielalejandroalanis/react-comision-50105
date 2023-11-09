import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// Components
import {
  NavBarComponent,
  LoaderComponent,
  ItemListContainer,
} from "./components";

// Custom Hook
import { useAllProducts } from "./hooks/useProducts";
const App = () => {
  //Productos
  //Productos en oferta
  // DRY - concepto de clean code que significa Don't Repeat Yourself

  const { products, loading, error } = useAllProducts(5);

  // if (loading) {
  //   return <LoaderComponent />;
  // } else {
  //   if (error) {
  //     return <div>Hubo un error</div>;
  //   } else {
  //     return <ItemListContainer products={products} />;
  //   }
  // }

  return (
    <div>
      <NavBarComponent />
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};

export default App;
