import React from "react";
import { Form, Button, Card } from "react-bootstrap"


function LogIn() {
  // displaying different component based on user type
  return (
    <>
    <Card >
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form>
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" required />
            </Form.Group>
            <Form.Group id="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button className="w-100 mt-4" type="submit">
              Log In
            </Button>
          </Form>
          
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? Sign Up
      </div>
    </>
  )
}

export default LogIn;
