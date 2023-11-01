import "./App.css";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent"
// import NavBarComponent from "./components/NavBar/NavBarComponent";
import MainLayout from "./layouts/MainLayout";

function App() {

  return (
    <MainLayout title="Tienda Daniel">
      <ButtonComponent />
    </MainLayout>
  );
}

export default App;
