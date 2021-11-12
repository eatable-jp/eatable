import { useForm } from "react-hook-form";
// redux
import { useSelector, useDispatch } from "react-redux";
import { updateBuyerInfo } from "../slice/buyerInfoSlice";
// react router
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Container, Form, Button } from "react-bootstrap";

export default function BuyerForm() {
  // setup react form
  const { register, handleSubmit, reset } = useForm();
  // setup redux
  const dispatch = useDispatch();

  // function for updating user info
  function sendBuyerInfo(updatedInfo) {
    // validation get rid of empty value
    Object.keys(updatedInfo).forEach((info) => {
      if (updatedInfo[info] === "" || updatedInfo[info] === null) {
        delete updatedInfo[info];
      }
    });
    dispatch(updateBuyerInfo(updatedInfo));
    reset();
  }
  return (
    <Container className="w-25">
      <Form onSubmit={handleSubmit(sendBuyerInfo)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            {...register("display_name")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("address")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            {...register("email")}
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
