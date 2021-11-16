import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap"



function Signup() {
  
  //const usernameRef = useRef()
  //const passwordRef = useRef()

  //async function handleSubmit(e) {
  //  e.preventDefault()
  
  //}

  return (
    <>
    <Card >
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
    </>
  )
}

export default Signup;
