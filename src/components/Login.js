import React, { useRef, useState, useEffect } from "react"
import { Container,Row, Col, Form, Button, Card, Alert, Spinner } from "react-bootstrap"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Link, useHistory } from "react-router-dom"

import {loginFail, loginPending, loginSuccess} from '../slice/loginSlice'

import {setUser} from '../slice/userSlice'





export default function Login() {

    const dispatch = useDispatch();

    const {isLoadiing, isAuth, error} = useSelector( state => state.login)

    const [soldItems, setSoldItems] = useState([])

  // access DB to make stats
  useEffect(async() => {
    const url = process.env.ITEMS_ROUTE || 'http://localhost:8080/global';
    // const url = '/items'
    const response = await axios.get(url);
    const items = response.data.filter((item)=> item.buyer_id !== "0");
    setSoldItems(items);
  },[]);
  const emailRef = useRef()
  const passwordRef = useRef()

 
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    dispatch(loginPending())

    try {
        
        let user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
          }
        // console.log(user)
        const url = process.env.LOGIN_ROUTE || 'http://localhost:8080/login'
        // const url = '/login'
        
        //const accessJWT = sessionStorage.getItem("accessJWT")

        //if(!accessJWT) {
        //  console.log("token not found")
        //}
        const res = await axios.post(url, user)
        console.log(res)

        if(res.data.status === "fail") {
          dispatch(loginFail(res.data.message))
        } else {
          dispatch(loginSuccess())
          console.log("success")

          dispatch(setUser(res.data.id))
          

          if (res.data.status === "success"){
            sessionStorage.setItem("accesJWT", res.data.accessJWT);
            localStorage.setItem("eatable", JSON.stringify({refreshJWT: res.data.refreshJWT }));
          }

          if (res.data.type === "1") {
            history.push("/seller")
          }else {
            history.push("/buyer")
          }
        }
    } catch (error) {
      dispatch(loginFail(error.message))
    }

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
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mt-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={isLoadiing} className="mt-4 w-100" type="submit">
              Log In
            </Button>
            {isLoadiing && <Spinner variant="primary" animation="border" /> }
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/">Sign Up</Link>
      </div>
          </Col>
        </Row>
    </Container>
    </div>
  )
}