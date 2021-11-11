import React from "react";
import SellerItems from "./SellerItems";
import SellerInfo from "./SellerInfo";

function SellerHome() {
  return (
    <div className="seller-wrapper">
      <div className="seller-items">
        <h2 className="seller-items-heading">Currently Listed</h2>
        <button className="seller-items-add-btn">Add a new item</button>
        <SellerItems />
      </div>
      <div className="seller-profile">
        <SellerInfo />
      </div>
    </div>
  );
}

export default SellerHome;
