import React from "react";
import SellerItems from "./SellerItems";
import ShopProfile from "./ShopProfile";

const SellerHome = ({ sellerInfo }) => {
  return (
    <div className="seller-wrapper">
      <div className="seller-items">
        <h2 className="seller-items-heading">Currently Listed</h2>
        <button className="seller-items-add-btn">Add a new item</button>
        <SellerItems sellerInfo={sellerInfo} />
      </div>
      <div className="seller-profile">
        <ShopProfile sellerInfo={sellerInfo} />
      </div>
    </div>
  );
};

export default SellerHome;
