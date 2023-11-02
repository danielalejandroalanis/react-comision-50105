import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./index.css";

import { Products } from "./json/ProductData";

function App() {
  //Event loop --- Todas las tareas tienen distintas prioridades (micro tareas - macro tareas)

  return (
    <div>
      <NavBarComponent />
      <ItemListContainer productsData={Products} />
      {/* Mis numeros (dentro del array) en una lista ordenada/desornada */}
    </div>
  );
}

export default App;
