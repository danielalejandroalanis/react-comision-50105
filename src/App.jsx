import "./App.css";
import ButtonComponent from "./ButtonComponent/ButtonComponent";

//CSS in JS
const misEstilos = {
  backgroundColor: "red",
  fontSize: "18px",
  color: "white",
  width: "100px",
  height: "100px",
};
function App() {
  const flag = false;
  // if(flag === true) {
  //   console.log("true")
  // }else{
  //   console.log("false")
  // }

  // const res = flag ? "true" : "false"


  //Estilos en linea (inline)
  // return <div style={{
//   backgroundColor: "red",
//   fontSize: "18px",
//   color: "white",
//   width: "100px",
//   height: "100px",
// }}> {flag ? "true" : "false"}</div>;

  return <div>
    <div style={misEstilos}> {flag ? "true" : "false"}   </div>
    <ButtonComponent />
  </div>;
}

export default App;
