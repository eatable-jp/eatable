import { useForm } from "react-hook-form";
import axios from "axios";
// redux
import { useSelector, useDispatch } from "react-redux";
// react router
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Container, Form, Button } from "react-bootstrap";
//


export default function BuyerForm() {
  // setup react form
  const { register, handleSubmit, reset } = useForm();
  // setup redux
  const dispatch = useDispatch();
  const buyerId = useSelector((state) => state.buyerInfo.id);

  // redirect function
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `/buyer-profile`; 
    history.push(path);
  }

  const editBuyerProfileHandler = async({buyer_name, buyer_address, email_address, phone_number}) => {
    const data = {
      id: buyerId,
      buyer_name, 
      buyer_address, 
      email_address, 
      phone_number
    };
    Object.keys(data).forEach((key) => {
      if (data[key] === "" || data[key] === null) {
        delete data[key];
      }
    });
    const url = process.env.BUYER_ROUTE || 'http://localhost:8080/buyer'
    await axios.patch(url, data);
    reset();
    routeChange();
  };

  return (
    <Container className="w-25">
      <Form onSubmit={handleSubmit(editBuyerProfileHandler)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            {...register("buyer_name")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email_address")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            {...register("buyer_address")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            {...register("phone_number")}
          />
        </Form.Group>
        <Button className="mr-2" variant="outline-success" type="submit">
          Submit
        </Button>{" "}
        <LinkContainer to="/buyer-profile">
          <Button variant="outline-danger" type="submit">
            Cancel
          </Button>
        </LinkContainer>
      </Form>
    </Container>
  );
}
