import React from "react";
// bootstrap
import { Container } from "react-bootstrap";
// components
import SellerItems from "./SellerItems";
import SellerInfo from "./SellerInfo";

function SellerHome() {
  return (
    <>
      <h2 className="seller-items-heading">Currently Listed</h2>
      <button className="seller-items-add-btn">Add a new item</button>
      <Container>
        <SellerItems />
      </Container>
    </>
  );
}

export default SellerHome;
