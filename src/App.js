// packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
  const userStatus = "buyer";

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* Header component */}
          <Header userStatus={userStatus} />
          <Switch>
            {/* Home component */}
            <Route exact path="/">
              <Home userStatus={userStatus} />
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
