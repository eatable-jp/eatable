import React from "react";
// redux
import { useSelector } from "react-redux";
// react router
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Card, Button, Container } from "react-bootstrap";

export default function SellerProfile() {
  // setup redux
  const sellerInfo = useSelector((state) => state.sellerInfo);
  return (
    <Container className="w-50 text-center">
      <Card>
        <Card.Header>
          <strong>{sellerInfo.shop_name}</strong>
        </Card.Header>
        <Card.Body>
          <dl>
            <dt>Address</dt>
            <dd>{sellerInfo.shop_location}</dd>
          </dl>
          <dl>
            <dt>Business hours</dt>
            <dd>
              {sellerInfo.opening_time} - {sellerInfo.closing_time}
            </dd>
          </dl>
          <dl>
            <dt>Phone number</dt>
            <dd>{sellerInfo.phone_number}</dd>
          </dl>
          <LinkContainer to="/seller-form">
            <Button variant="outline-success">Edit profile</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Container>
  );
}
