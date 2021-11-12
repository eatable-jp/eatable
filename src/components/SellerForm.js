import { useForm } from "react-hook-form";
// redux
import { useDispatch } from "react-redux";
import { updateSellerInfo } from "../slice/sellerInfoSlice";
// react router
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Container, Form, Button } from "react-bootstrap";

export default function SellerForm() {
  // setup react form
  const { register, handleSubmit, reset } = useForm();
  // setup redux
  const dispatch = useDispatch();

  // function for updating user info
  function sendSellerInfo(updatedInfo) {
    // validation get rid of empty value
    Object.keys(updatedInfo).forEach((info) => {
      if (updatedInfo[info] === "" || updatedInfo[info] === null) {
        delete updatedInfo[info];
      }
    });
    dispatch(updateSellerInfo(updatedInfo));
    reset();
  }
  return (
    <Container className="w-25">
      <Form onSubmit={handleSubmit(sendSellerInfo)}>
        <Form.Group className="mb-3" controlId="formBasicShopName">
          <Form.Label>Shop name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter shop name"
            {...register("shop_name")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            {...register("shop_location")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            {...register("phone_number")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicOpeningTime">
          <Form.Label>Opening time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter opening time"
            {...register("opening_time")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicClosingTime">
          <Form.Label>Closing time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter closing time"
            {...register("closing_time")}
          />
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
