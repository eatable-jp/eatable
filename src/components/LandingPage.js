import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// bootstrap
import { Container, Row, Col, Form, Button, Card, Alert, Spinner, Carousel } from "react-bootstrap"
// images
import lp_bg01 from "../img/lp_bg01.jpg";
import lp_bg02 from "../img/lp_bg02.jpg";
import lp_bg03 from "../img/lp_bg03.jpg";
// components
import Header from "./Header.js";
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
const bcrypt = require('bcryptjs')




function LandingPage() {

  const [soldItems, setSoldItems] = useState([])

  // access DB to make stats
  useEffect(async() => {

    const url = process.env.ITEMS_ROUTE || 'http://localhost:8080/global';
    // const url = '/items'
    const response = await axios.get(url);
    const items = response.data.filter((item)=> item.buyer_id !== '0');
    setSoldItems(items);
  },[]);


  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const typeRef = useRef()

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [success, setSuccess] = useState(false)
 

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      
      // Encryption
      var salt = bcrypt.genSaltSync(10);
      var hashed_pass = bcrypt.hashSync(passwordRef.current.value, salt);
      
      let user = {
        email: emailRef.current.value,
        password: hashed_pass,
        type: typeRef.current.value
      }
      const url = process.env.SIGNUP_ROUTE || 'http://localhost:8080/signup'
      // const url = '/signup'
      const res = await axios.post(url, user)
      
      console.log(res.data)

      if( user.type === "1"){
        const seller = {
          id : res.data.id,
          email_address : user.email,
        }
        const sellerurl = process.env.SELLER || 'http://localhost:8080/seller'
        const sellerRes = await axios.post(sellerurl, seller)
        console.log(sellerRes.data);
      } else {
        const buyer = {
          id : res.data.id,
          email_address : user.email
        }
        const buyerurl = process.env.BUYER || 'http://localhost:8080/buyer'
        const buyerRes = await axios.post(buyerurl, buyer)
        console.log(buyerRes.data);
      }

      setSuccess(true)
      //history.push("/login")
    } catch {
      setError("Sorry, Failed to create an account. Have you already registered this email?")
    }

    setLoading(false)
    document.getElementById("signup-form").reset();
  }


  return (
    <div className="lp-wrapper">
    <h1 className="text-center" style={{fontFamily: 'Pacifico', margin: "0 auto", color: "#fff"}}>Eatable</h1>
    <Container className="mt-5">
        <Row>
          <Col>
            <p style={{color: "#fff", fontSize: "24px"}}>
              The amount of food saved ... <br />
              <span style={{fontSize: "54px", fontWeight: "bold"}}>{soldItems.length} Servings</span>
            </p>
          </Col>
          <Col>
            <Card >
              <Card.Body>
                <h2 className="text-center mb-2">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">Registerd Successfully</Alert>}
                <Form id="signup-form" onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password" className="mt-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="password-confirm" className="mt-4">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                  </Form.Group>
                  <Form.Group id="type" className="mt-4">
                    <Form.Label>Register as</Form.Label>
                      <Form.Select id="dropdown" ref={typeRef}>
                        <option value="1">Seller</option>
                        <option value="2">Buyer</option>
                      </Form.Select>
                  </Form.Group>
                  <Button disabled={loading} className="w-100 mt-4" type="submit">
                    Sign Up
                  </Button>
                  {loading && <Spinner variant="primary" animation="border" /> }
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
          </Col>
        </Row>
    </Container>
    </div>
  )
}

export default LandingPage;
