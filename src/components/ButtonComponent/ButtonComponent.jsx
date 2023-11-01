import React, { useEffect, useState } from "react";

const ButtonComponent = () => {
  const [count, setCount] = useState(0);

  //Sin array de dependencias se va a ejecutar con cualquier cambio que se produzca en el componente
  // useEffect(() => {
  //   console.log("useEffect");
  // })

  //Con array de dependencias vacio se va a ejecutar solo una vez cuando se monte el componente por primera vez
  // useEffect(() => {
  //     console.log("useEffect");
  //   }, [])

  //Con array de dependencias con una o mas variable se va a ejecutar cuando se monte el componente y cuando cambie la/s variable/s
  // useEffect(() => {
  //   console.log("useEffect");
  // }, [count]);

  //Spoiler ALERT  - Ejemplo con API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  const handleClean = () => {
    setCount(0);
  };

  return (
    <div>
      <div>Cuenta: {count}</div>
      <button onClick={handleAdd}> + 1 </button>
      <button onClick={handleClean}> Clean </button>
      <button onClick={handleRemove}> - 1 </button>
    </div>
  );
};

export default ButtonComponent;
