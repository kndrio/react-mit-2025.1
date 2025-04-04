import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Input
} from "reactstrap";

const Product = ({ item, onChange }) => {
  return (
    <Card className="mb-3">
      <Row className="align-items-center no-gutters">
        <Col md="3" className="text-center">
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid p-2"
            style={{ maxHeight: "120px", objectFit: "contain" }}
          />
        </Col>
        <Col md="9">
          <CardBody>
            <CardTitle tag="h5">{item.title}</CardTitle>
            <CardText>Price: ${item.price}</CardText>
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) => onChange(item.id, parseInt(e.target.value))}
              min="1"
              style={{ width: "80px" }}
            />
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mb-5">
      <h3>Carrinho de Compras</h3>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <Product
                item={item}
                onChange={(id, quantity) =>
                  dispatch(updateQuantity({ id, quantity }))
                }
              />
              <Button
                color="danger"
                size="sm"
                onClick={() => dispatch(removeFromCart(item.id))}
                className="mb-3"
              >
                Remover do Carrinho
              </Button>
            </div>
          ))}
          <Button color="danger" onClick={() => dispatch(clearCart())}>
            Limpar Carrinho
          </Button>
        </div>
      )}
    </div>
  );
};

const StoreRedux = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Erro ao buscar os produtos: ", error));
  }, []);

  return (
    <Container className="my-4">
      <h2 className="mb-4">My Store Redux</h2>
      <Cart />
      <Row>
        {products.map((product) => (
          <Col md="4" key={product.id} className="mb-4">
            <Card>
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <CardBody>
                <CardTitle tag="h5">{product.title}</CardTitle>
                <CardText>Price: ${product.price}</CardText>
                <Button color="primary" onClick={() => dispatch(addToCart(product))}>
                  Adicionar ao Carrinho
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StoreRedux;
