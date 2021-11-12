// react router
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Container, Form, Button } from "react-bootstrap";

export default function SellerForm() {
  return (
    <Container className="w-25">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicShopName">
          <Form.Label>Shop name</Form.Label>
          <Form.Control type="text" placeholder="Enter shop name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" placeholder="Enter phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicOpeningTime">
          <Form.Label>Opening time</Form.Label>
          <Form.Control type="text" placeholder="Enter opening time" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicClosingTime">
          <Form.Label>Closing time</Form.Label>
          <Form.Control type="text" placeholder="Enter closing time" />
        </Form.Group>
        <Button className="mr-2" variant="outline-success" type="submit">
          Submit
        </Button>{" "}
        <LinkContainer to="/seller-profile">
          <Button variant="outline-danger" type="submit">
            Cancel
          </Button>
        </LinkContainer>
      </Form>
    </Container>
  );
}
