// packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import "./App.css";
// redux toolkit
import { Provider } from "react-redux";
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

  return (
    <Provider store={store}>
      
      <Router>
        <div className="App">
          <Switch>
            {/* Home component */}
            <Route exact path="/">
              <LandingPage />
            </Route>
            {/* Login component */}
            <Route exact path="/login">
              <Login />
            </Route>
            {/* seller page component */}
            <Route exact path="/seller">
              <Home userStatus="seller" />
            </Route>
            {/* buyer page component */}
            <Route exact path="/buyer">
              <Home userStatus="buyer" />
            </Route>
            {/* Cart component */}
            <Route path="/cart">
              <Cart />
            </Route>
            {/* Seller Profile component */}
            <Route path="/seller-profile">
              <SellerProfile />
            </Route>
            {/* Buyer Profile component */}
            <Route path="/buyer-profile">
              <BuyerProfile />
            </Route>
            {/* Buyer Profile Form component */}
            <Route path="/buyer-form">
              <BuyerForm />
            </Route>
            {/* Seller Profile Form component */}
            <Route path="/seller-form">
              <SellerForm />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </Provider>
  );
}

export default App;
