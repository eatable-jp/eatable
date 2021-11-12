import React from "react";
// redux
import { useSelector } from "react-redux";
// bootstrap
import { Container } from "react-bootstrap";
// components
import BuyerItems from "./BuyerItems";

function BuyerHome() {
  const buyerInfo = useSelector((state) => state.buyerInfo);
  return (
    <div className="buyer-wrapper">
      <div className="buyer-items">
        <h2 className="mb-5 text-center">Hello {buyerInfo.display_name}!</h2>
        <Container>
          <BuyerItems />
        </Container>
      </div>
    </div>
  );
}

export default BuyerHome;
