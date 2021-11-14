import React from "react";
// redux
import { useSelector } from "react-redux";
// react router
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Card, Button, Container } from "react-bootstrap";

export default function BuyerProfile() {
  // setup redux
  const buyerInfo = useSelector((state) => state.buyerInfo);
  return (
    <>
      <Container className="w-50 text-center">
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
      </Container>
    </>
  );
}
