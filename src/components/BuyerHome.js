import React from "react";
// redux
import { useSelector } from "react-redux";
// components
import BuyerItems from "./BuyerItems";

function BuyerHome({ addToCart }) {
  const buyerInfo = useSelector((state) => state.buyerInfo);
  return (
    <div className="buyer-wrapper">
      <div className="buyer-items">
        <h2 className="buyer-items-heading">Hello {buyerInfo.display_name}!</h2>
        <BuyerItems />
      </div>
    </div>
  );
}

export default BuyerHome;
