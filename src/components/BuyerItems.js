import React, { useState, useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";
import { removeFromCart } from "../slice/cartSlice";
// bootstrap
import { Row, Col, Card, Image, Button, Modal } from "react-bootstrap";
// dummy data
import { sellers } from "../data/sellers";

import { fetchItems } from "../slice/itemsSlice";

export default function BuyerItems() {
  useEffect(()=>{dispatch(fetchItems())},[])
  // setup redux
  const dispatch = useDispatch();
  const { filteredItems } = useSelector((state) => state.items);
  const cart = useSelector((state) => state.cart);

  // selectedItem state
  const [selectedItem, setSelectedItem] = useState({
    buyer: "",
    expiration_date: "",
    id: "",
    image: "",
    name: "",
    note: "",
    original_price: "",
    price: "",
    seller_id: "",
    type: "",
  });
  // selectedItem state: function to keep track of selected item
  function passSelectedItem(item) {
    setSelectedItem(item);
  }
  // selectedItem's shop
  const shop =
    selectedItem.seller_id === ""
      ? ""
      : sellers.find((seller) => seller.id === selectedItem.seller_id)[
          "shop_name"
        ];

  // modal function
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {filteredItems.map((item, index) => {
          return (
            <Col key={index}>
              <Card className="h-100" key={index}>
                <Card.Header className="d-flex justify-content-between">
                  <p className="mb-0">{item.name}</p>
                  <p className="mb-0">Price: {item.price}</p>
                </Card.Header>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Text className="mb-1">
                    Best before {item.expiration_date}
                  </Card.Text>

                  <div className="d-flex justify-content-between">
                    {cart.some((cartItem) => cartItem.id === item.id) ? (
                      <Button
                        variant="outline-danger"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove from cart
                      </Button>
                    ) : (
                      <Button
                        variant="outline-success"
                        onClick={() => dispatch(addToCart(item))}
                      >
                        Add to cart
                      </Button>
                    )}
                    <Button
                      variant="outline-info"
                      onClick={() => {
                        handleShow();
                        passSelectedItem(item);
                      }}
                    >
                      More info
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      {/* modal for full item info */}
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-center">
              <Image src={selectedItem.image} fluid />
            </p>
            <dl>
              <dt>Original price</dt>
              <dd>{selectedItem.original_price} yen</dd>
            </dl>
            <dl>
              <dt>Current price</dt>
              <dd>{selectedItem.price} yen</dd>
            </dl>
            <dl>
              <dt>Shop</dt>
              <dd>{shop}</dd>
            </dl>
            <dl>
              <dt>Best before</dt>
              <dd>{selectedItem.expiration_date}</dd>
            </dl>
            <dl>
              <dt>Note</dt>
              <dd>{selectedItem.note}</dd>
            </dl>
          </Modal.Body>
          <Modal.Footer>
            {cart.some((cartItem) => cartItem.id === selectedItem.id) ? (
              <Button
                variant="outline-danger"
                onClick={() => {
                  dispatch(removeFromCart(selectedItem.id));
                  handleClose();
                }}
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                variant="outline-success"
                onClick={() => {
                  dispatch(addToCart(selectedItem));
                  handleClose();
                }}
              >
                Add to cart
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}
