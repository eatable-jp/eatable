import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { filterByFoodType } from "../slice/itemsSlice";
// bootstrap
import { Container, Form } from "react-bootstrap";
// components
import BuyerItems from "./BuyerItems";

function BuyerHome() {
  // redux
  const buyerInfo = useSelector((state) => state.buyerInfo);
  const dispatch = useDispatch();
  // filter function
  function sendFoodType(type) {
    dispatch(filterByFoodType(type));
  }
  return (
    <div className="buyer-wrapper">
      <div className="buyer-items">
        <h2 className="mb-5 text-center">Hello {buyerInfo.display_name}!</h2>
        {/* food type filter */}
        <Container>
          <Form className="w-25" onChange={(e) => sendFoodType(e.target.value)}>
            <Form.Group className="mb-3" controlId="formBasicType">
              <Form.Label>Food type</Form.Label>
              <Form.Select aria-label="type">
                <option value="all">All</option>
                <option value="Meat">Meat</option>
                <option value="Fish">Fish</option>
                <option value="Vegetable">Vegetable</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Container>
        <Container>
          <BuyerItems />
        </Container>
      </div>
    </div>
  );
}

export default BuyerHome;
