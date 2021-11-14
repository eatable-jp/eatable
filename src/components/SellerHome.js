import { useForm } from "react-hook-form";
import React, { useState } from "react";
// bootstrap
import { Container, Button, Modal, Form } from "react-bootstrap";
// components
import SellerItems from "./SellerItems";
import SellerInfo from "./SellerInfo";

function SellerHome() {
  // function to display add new item modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // setup react form
  const { register, handleSubmit, reset } = useForm();

  const newItemHandler = (data) => {
    console.log(data)
    //use the endpoint to post this to the DB
    handleClose()

  };

  return (
    <>
      <Container className="text-center mb-5">
        <h2>Currently Listed</h2>
        <Button variant="primary" onClick={handleShow}>
          Add a new item
        </Button>
      </Container>
      <Container>
        <SellerItems />
      </Container>
      {/* add new item modal */}
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a new item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit(newItemHandler)}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" {...register("name")}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicType">
                <Form.Label>Type</Form.Label>
                <Form.Select aria-label="type" {...register("type")}>
                  <option>Select food type</option>
                  <option value="Meat">Meat</option>
                  <option value="Fish">Fish</option>
                  <option value="Vegetable">Vegetable</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price" {...register("price")} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Original price</Form.Label>
                <Form.Control type="text" placeholder="Enter original price" {...register("original_price")}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Expiration date</Form.Label>
                <Form.Control type="date" {...register("date")}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Note</Form.Label>
                <Form.Control type="text" placeholder="Notes" {...register("note")}/>
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

export default SellerHome;
