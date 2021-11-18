import React, { useState, useEffect } from "react";
import axios from "axios";
// redux
import { useSelector } from "react-redux";
// react router
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Card, Row, Col, Button, Container, Accordion } from "react-bootstrap";

import Header from "./Header.js";

export default function SellerProfile() {
  // setup redux
  const sellerInfo = useSelector((state) => state.sellerInfo);

  // sold item state
  const [soldItems, setSoldItems] = useState([]);

  useEffect(async() => {
    const url = process.env.ITEMS_ROUTE || 'http://localhost:8080/items';
    const response = await axios.get(url);
    const items = response.data.filter((item)=> item.seller_id === sellerInfo.id && item.conformation !== null)
    setSoldItems(items);
  },[]);

  return (
    <>
    <Header userStatus="seller" />
    <Container className="w-50 text-center">
      <Row className="mb-5">
        <Col>
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
      </Col>
      <Col>
        <h3 className="text-center">Sold Items</h3>
          <Accordion defaultActiveKey="0">
            {soldItems.map((item, index) => {
              return (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>{item.name}</Accordion.Header>
                  <Accordion.Body>
                    <dl>
                      <dt>Price</dt>
                      <dd>{item.price} yen</dd>
                    </dl>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
      </Col>
      </Row>
      <Row>
        <Col>
          <dl>
            <dt>Food Saved</dt>
            <dd>{soldItems.length} Servings</dd>
          </dl>
          <dl>
            <dt>Money Saved</dt>
            <dd>{soldItems.reduce((total, item) => {
              total += item.price;
              return total;
            }, 0)} Yen</dd>
          </dl>
        </Col>
      </Row>
    </Container>
    </>
  );
}
