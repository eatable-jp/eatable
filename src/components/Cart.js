import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slice/cartSlice";
// bootstrap
import {
  Row,
  Col,
  Card,
  Image,
  Button,
  Modal,
  Container,
  ListGroup,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Cart() {
  // setup redux
  const dispatch = useDispatch();
  const buyerInfo = useSelector((state) => state.buyerInfo);
  const cart = useSelector((state) => state.cart);

  // calculate total amount
  const totalAmount = cart.reduce((total, cartItem) => {
    total += cartItem.price;
    return total;
  }, 0);

  return cart.length === 0 ? (
    <Container className="text-center">
      <h2>Cart is empty</h2>
    </Container>
  ) : (
    <>
      <Container className="text-center">
        <h2 className="mb-5">Hello {buyerInfo.display_name}!</h2>
        <Row>
          <Col sm={8}>
            <ListGroup>
              {cart.map((item, index) => {
                return (
                  <ListGroup.Item key={index}>
                    <Row className="d-flex">
                      <Col>
                        <Image src={item.image} alt="product image" />
                      </Col>
                      <Col className="d-flex flex-column justify-content-between align-items-start">
                        <div className="text-left">
                          <h3 className="mb-1">{item.name}</h3>
                          <p className="mb-1">
                            Best before {item.expiration_date}
                          </p>
                          <p className="mb-1">{item.note}</p>
                          <p className="mb-1">
                            <del>{item.original_price} yen</del>
                          </p>
                          <p className="mb-1 price-current">
                            <strong>{item.price} yen</strong>
                          </p>
                        </div>
                        <Button
                          variant="outline-danger"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove from cart
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <strong>Cart summary</strong>
              </Card.Header>
              <Card.Body>
                <Card.Text className="text-left">
                  <dl className="d-flex justify-content-between">
                    <dt>Total price</dt>
                    <dd>{totalAmount} yen</dd>
                  </dl>
                </Card.Text>
                <Button variant="primary">Purchase and takeaway</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
