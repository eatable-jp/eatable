import React from "react";
import Header from "./Header.js";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"

function LandingPage() {
  
  return (
    <div className="lp-wrapper">
    <h1 className="text-center" style={{fontFamily: 'Pacifico', margin: "0 auto", color: "#fff"}}>Eatable</h1>
    <Container className="mt-5">
        <Row>
          <Col>
            <p style={{color: "#fff", fontSize: "24px"}}>
              The amount of food saved ... <br />
              <span style={{fontSize: "54px", fontWeight: "bold"}}>200.3kg </span>
            </p>
          </Col>
          <Col>
            <Card >.
              <Card.Body>
                <h2 className="text-center mb-2">Sign Up</h2>
                <Form>
                  <Form.Group id="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" required />
                  </Form.Group>
                  <Form.Group id="password" className="mt-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  required />
                  </Form.Group>
                  <Button className="w-100 mt-4" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Already have an account? Log In
            </div>
          </Col>
        </Row>
    </Container>
    </div>
  )
}

export default LandingPage;
