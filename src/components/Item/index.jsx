import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import ItemCount from "../ItemCount";
import "./style.css";
// import { products } from "../../data/products";
const Item = ({ product }) => {
  return (
    <div className="my-1 mx-1 card-container">
      <Card border="info" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Precio: $ {product.price}</ListGroup.Item>
            <ListGroup.Item>Stock: {product.stock}</ListGroup.Item>
          </ListGroup>
          {/* <ItemCount /> */}

          <Button variant="dark">Agregar Carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
