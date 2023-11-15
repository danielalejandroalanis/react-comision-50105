import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Components

import { MainRouter } from "./router/MainRouter";

const App = () => {
  return (
    <div>
      <MainRouter />
    </div>
  );
};

export default App;
