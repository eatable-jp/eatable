import React, { useState } from "react";
import axios from "axios";
// redux
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../slice/cartSlice";
import { updatePurchase } from "../slice/purchasesSlice";
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

import Header from "./Header.js";

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

  //handle the DB call
  const handlePurchase = async () => {
    const cartId = cart.map((item)=>item.id)
    for(let i = 0; i < cartId.length; i++){
      const data = {
        id:cartId[i],
        buyer_id: buyerInfo.id,
      };
      //const url = process.env.REACT_ITEM_ROUTE
      await axios.patch('/item',data)
    }
    
  }

  // function to display add new item modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return cart.length === 0 ? (
    <>
      <Header userStatus="buyer" />
      <Container className="text-center">
        <h2>Cart is empty</h2>
      </Container>
    </>
  ) : (
    <>
      <Header userStatus="buyer" />
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
                <Button
                  variant="primary"
                  onClick={() => {
                    handlePurchase();
                    handleShow();
                    dispatch(updatePurchase(cart));
                    setTimeout(() => {
                      dispatch(clearCart());
                    }, 2000);
                  }}
                >
                  Purchase and takeaway
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* modal for full item info */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p className="text-center">Thank you for the purchase!</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Cart;
