import React from "react";

const ButtonComponent = () => {
  //Esto crea un estado llamado 'count'
  const [count, setCount] = React.useState(0);

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleRemove = () => {
    setCount(count - 1)
  }

  const handleClean = () => {
    setCount(0)
  }

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
