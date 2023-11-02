import Card from "react-bootstrap/Card";

//try y catch son bloques que se utilizan para trabajar con promesas
// try {
//     resolve(true)
// }
// catch (error) {
//     reject(error)
// }
const ItemListContainer = ({ productsData }) => {
  const promesa = new Promise((resolve, reject) => {
    const flag = false;

    setTimeout(() => {
      if (flag) {
        resolve("Es verdadero");
      } else {
        reject("Es falso");
      }
    }, 1000);
  });

  promesa
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div>
      {productsData.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
