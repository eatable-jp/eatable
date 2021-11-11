import React from "react";
// components
import SellerHome from "./SellerHome";
import BuyerHome from "./BuyerHome";

function Home({ userStatus }) {
  // displaying different component based on user type
  return userStatus === "seller" ? (
    // seller's home
    <SellerHome />
  ) : (
    // buyer's home
    <BuyerHome />
  );
}

export default Home;
