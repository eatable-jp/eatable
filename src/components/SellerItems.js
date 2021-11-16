import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// redux
import { useSelector, useDispatch } from "react-redux";
import { updateItems } from "../slice/itemsSlice";
import { fetchItems } from "../slice/itemsSlice";
// bootstrap
import { Row, Col, Card, Button, Form, Modal } from "react-bootstrap";

export default function ListedItems() {
  // setup redux
  const dispatch = useDispatch();
  const sellerInfo = useSelector((state) => state.sellerInfo);
  const { items } = useSelector((state) => state.items);

  // setup react form
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  // function for updating item info
  function sendUpdatedItem(updatedInfo) {
    // validation get rid of empty value
    Object.keys(updatedInfo).forEach((info) => {
      if (updatedInfo[info] === "" || updatedInfo[info] === null) {
        delete updatedInfo[info];
      }
    });
    updatedInfo.id = selectedItem;
    dispatch(updateItems(updatedInfo));
    reset();
  }

  useEffect ( () => {
    dispatch(fetchItems())
  }, [])

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

  // function to display add new item modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // filtering items that matches logged in seller
  const itemList = items.filter((item) => item.seller_id === sellerInfo.id);
  //const itemList = items
  // generating item card

  const editItemHandler = (data) => {
    console.log(data)
    //use the endpoint to post this to the DB
    handleClose()

  };
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {itemList.map((item, index) => {
          return (
            <Col key={index}>
              <Card bg="Light" className="h-100" key={index}>
                {/*<Card.Img variant="top" src={item.image} />*/}
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{sellerInfo.shop_name}</Card.Text>
                  <Card.Text>Best before {item.expiration_date}</Card.Text>
                  <Card.Text>{item.note}</Card.Text>
                  <Card.Text className="item-info-current-price">
                    {item.price} yen
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleShow();
                      passSelectedItem(item);
                    }}
                  >
                    Edit item
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      {/* add new item modal */}
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit(editItemHandler)}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder={selectedItem.name} {...register("name")}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicType">
                <Form.Label>Type</Form.Label>
                <Form.Select aria-label="type" {...register("type")}>
                  <option>Select food type</option>
                  <option value="1">Meat</option>
                  <option value="2">Fish</option>
                  <option value="3">Vegetable</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder={selectedItem.price} {...register("price")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Original price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={selectedItem.original_price}
                  {...register("original_price")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Expiration date</Form.Label>
                <Form.Control type="date" {...register("date")}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Note</Form.Label>
                <Form.Control type="text" placeholder={selectedItem.note} {...register("note")}/>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" {...register("photo")}/>
              </Form.Group>
              <Button type="submit" variant="outline-success">Submit</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </>
  );
}
