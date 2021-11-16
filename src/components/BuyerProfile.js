import React from "react";
// redux
import { useSelector } from "react-redux";
// react router
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Row, Col, Card, Button, Container } from "react-bootstrap";
// components
import BuyerPurchases from "../components/BuyerPurchases";
import Header from "./Header.js";

export default function BuyerProfile() {
  // setup redux
  const buyerInfo = useSelector((state) => state.buyerInfo);
  return (
    <>
    <Header userStatus="buyer" />
    <Container>
      <Row className="mb-5">
        {/* buyer profile */}
        <Col className="text-center">
          <Card>
            <Card.Header>
              <strong>{buyerInfo.display_name}</strong>
            </Card.Header>
            <Card.Body>
              <dl>
                <dt>Address</dt>
                <dd>{buyerInfo.address}</dd>
              </dl>
              <dl>
                <dt>Email</dt>
                <dd>{buyerInfo.email}</dd>
              </dl>
              <dl>
                <dt>Phone number</dt>
                <dd>{buyerInfo.phone_number}</dd>
              </dl>
              <LinkContainer to="/buyer-form">
                <Button variant="outline-success">Edit profile</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        {/* purchase history */}
        <Col>
          <h3 className="text-center">Your purchase</h3>
          <BuyerPurchases />
        </Col>
      </Row>
      <Row>
        <Col>
          <dl>
            <dt>Amount of Food Saved</dt>
            <dd>10.3 kg</dd>
            <dt>Amount of Money Saved</dt>
            <dd>24,500 yen</dd>
          </dl>
        </Col>
      </Row>
    </Container>
    </>
  );
}
