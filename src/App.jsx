import MainRoutes from "./routes/MainRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div>
        <MainRoutes />
      </div>
    </CartProvider>
  );
}

export default App;
