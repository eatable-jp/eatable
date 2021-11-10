import React from "react";
// components
import SellerHome from "./SellerHome";
import BuyerHome from "./BuyerHome";

function Home({ userStatus, sellerInfo, buyerInfo, addToCart }) {
  // displaying different component based on user type
  return userStatus === "seller" ? (
    // seller's home
    <SellerHome sellerInfo={sellerInfo} />
  ) : (
    // buyer's home
    <BuyerHome buyerInfo={buyerInfo} addToCart={addToCart} />
  );
}

export default Home;
