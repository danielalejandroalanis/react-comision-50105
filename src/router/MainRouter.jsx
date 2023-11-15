import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBarComponent } from "../components";
import { ItemDetailContainer } from "../pages";

export const MainRouter = () => {
  //HOC - High Order Component
  // Siempre SIEMPRE SIEMPREEEE se debe crear una ruta por cada pagina
  //Parametro por url

  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
