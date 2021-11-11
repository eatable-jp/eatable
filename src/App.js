// packages
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// components
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import SellerProfile from "./components/SellerProfile";
import BuyerProfile from "./components/BuyerProfile";

function App() {
  const userStatus = "buyer";
  // dummy data for seller
  const sellerInfo = {
    id: 1,
    shop_name: "Fresh",
    shop_location: "1-1-1, Tamagawa, Setagaya, Tokyo",
    opening_time: "9:00",
    closing_time: "22:00",
    phone_number: "03-521-778",
  };
  // dummy data for buyer
  const buyerInfo = {
    id: 1,
    display_name: "Test User",
    email: "test@test.com",
    address: "1-1-1, Tamagawa, Setagaya, Tokyo",
    phone_number: "070-5587-1245",
  };

  // cart state
  const [cart, setCart] = useState([]);
  // cart state: function for adding items to cart
  function addToCart(selectedItem) {
    setCart((prevCart) => {
      const newCart = [...prevCart, selectedItem];
      return newCart;
    });
  }
  // cart state: function for adding items to cart
  function removeFromCart(index) {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item, i) => i !== index);
      return newCart;
    });
  }

  return (
    <Router>
      <div className="App">
        {/* Header component */}
        <Header userStatus={userStatus} />
        <Switch>
          {/* Home component */}
          <Route exact path="/">
            <Home
              userStatus={userStatus}
              sellerInfo={sellerInfo}
              buyerInfo={buyerInfo}
              addToCart={addToCart}
            />
          </Route>
          {/* Cart component */}
          <Route path="/cart">
            <Cart
              buyerInfo={buyerInfo}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          </Route>
          {/* Buyer Profile component */}
          <Route path="/buyer-profile">
            <BuyerProfile buyerInfo={buyerInfo} />
          </Route>
          {/* Seller Profile component */}
          <Route path="/seller-profile">
            <SellerProfile sellerInfo={sellerInfo} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
