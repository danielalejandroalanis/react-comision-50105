import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { getAllProducts, getSingleProducts } from "./services/apiProducts";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts(10)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));

    getSingleProducts().then((res) => console.log(res));
  }, []);

  return (
    <div>
      <NavBarComponent />
      <ItemListContainer products={products} />
    </div>
  );
}

export default App;
