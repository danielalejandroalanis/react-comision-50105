import Card from "react-bootstrap/Card";

const ItemListContainer = ({ products }) => {
  return (
    <div style={{ display: "flex", flexWrap: 1, width: "100vw" }}>
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem", margin: 20 }}>
            <Card.Img variant="top" src={product.thumbnail} />
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
