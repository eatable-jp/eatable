import React from "react";
import BuyerItems from "./BuyerItems";

const BuyerHome = ({ buyerInfo }) => {
  return (
    <div className="buyer-wrapper">
      <div className="buyer-items">
        <h2 className="buyer-items-heading">Hello {buyerInfo.display_name}!</h2>
        <BuyerItems buyerInfo={buyerInfo} />
      </div>
    </div>
  );
};

export default BuyerHome;
