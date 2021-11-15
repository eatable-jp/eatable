import React, { useState, useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { filterByFoodType } from "../slice/itemsSlice";
import { setUserLocation } from "../slice/locationSlice";
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

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        dispatch(setUserLocation({ latitude, longitude }));
      });
    }
  }, []);

  // distance state
  const [distance, setDistance] = useState("");

  return (
    <div className="buyer-wrapper">
      <div className="buyer-items">
        <h2 className="mb-5 text-center">Hello {buyerInfo.display_name}!</h2>
        <Container className="d-flex justify-content-start">
          {/* food type filter */}
          <Form
            className="w-25"
            onChange={(e) => sendFoodType(e.target.value)}
            style={{ marginRight: "20px" }}
          >
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
          {/* food type filter */}
          <Form className="w-25" onChange={(e) => setDistance(e.target.value)}>
            <Form.Group className="mb-3" controlId="formBasicLocation">
              <Form.Label>Location</Form.Label>
              <Form.Select aria-label="type">
                <option value="">Select distance</option>
                <option value="2">Within 2km</option>
                <option value="4">Within 4km</option>
                <option value="6">Within 6km</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Container>
        <Container>
          <BuyerItems distance={distance} />
        </Container>
      </div>
    </div>
  );
}

export default BuyerHome;
