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
  return (
    <>
      <h2 className="seller-items-heading">Currently Listed</h2>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
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
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicType">
                <Form.Label>Type</Form.Label>
                <Form.Select aria-label="type">
                  <option>Select food type</option>
                  <option value="1">Meat</option>
                  <option value="2">Fish</option>
                  <option value="3">Vegetable</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Original price</Form.Label>
                <Form.Control type="text" placeholder="Enter original price" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Expiration date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Note</Form.Label>
                <Form.Control type="text" placeholder="Notes" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="outline-success">Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}

export default SellerHome;
