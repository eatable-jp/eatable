import React from "react";
// redux
import { useSelector } from "react-redux";
// react router
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Button } from "react-bootstrap";

export default function SellerProfile() {
  // setup redux
  const sellerInfo = useSelector((state) => state.sellerInfo);
  return (
    <>
      <div className="buyer-profile">
        <h2 className="buyer-profile-name">{sellerInfo.shop_name}</h2>
        <table className="buyer-profile-table">
          <tbody>
            <tr>
              <th>Address</th>
              <td>{sellerInfo.shop_location}</td>
            </tr>
            <tr>
              <th>Business hours</th>
              <td>
                {sellerInfo.opening_time} - {sellerInfo.closing_time}
              </td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{sellerInfo.phone_number}</td>
            </tr>
          </tbody>
        </table>
        <LinkContainer to="/seller-form">
          <Button>Edit profile</Button>
        </LinkContainer>
      </div>
    </>
  );
}
