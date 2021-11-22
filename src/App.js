// packages
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import "./App.css";
// redux toolkit
import { Provider, useSelector } from "react-redux";
import store from "./store";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// components
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import SellerProfile from "./components/SellerProfile";
import BuyerProfile from "./components/BuyerProfile";
import BuyerForm from "./components/BuyerForm";
import SellerForm from "./components/SellerForm";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";

function App() {
  const userStatus = "seller";

  const { isAuth } = useSelector( state => state.login)

  return (    
        <div className="App">
          <Router>
          <Switch>
            <main>
              <Route exact path="/"> <LandingPage /> </Route>
              <Route exact path="/login"> <Login /> </Route>
              {isAuth === false ? (
                <Redirect to="/login" />
              ) : (
                <>
                <Route exact path="/seller"> <Home userStatus="seller" /> </Route>
                <Route exact path="/buyer"> <Home userStatus="buyer" /> </Route>
                <Route exact path="/cart"> <Cart /> </Route>
                <Route exact path="/seller-profile"> <SellerProfile /> </Route>
                <Route exact path="/buyer-profile"> <BuyerProfile /> </Route>
                <Route exact path="/seller-form"> <SellerForm /> </Route>
                <Route exact path="/buyer-form"> <BuyerForm /> </Route>
                </>
              )}
            </main>
          </Switch>
         </Router>
        </div>
  );
}

export default App;
