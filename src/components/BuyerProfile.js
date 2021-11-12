import React from "react";
// redux
import { useSelector } from "react-redux";
// react router
import { LinkContainer } from "react-router-bootstrap";
// bootstrap
import { Button } from "react-bootstrap";

export default function BuyerProfile() {
  // setup redux
  const buyerInfo = useSelector((state) => state.buyerInfo);
  return (
    <>
      <div className="buyer-profile">
        <h2 className="buyer-profile-name">{buyerInfo.display_name}</h2>
        <table className="buyer-profile-table">
          <tbody>
            <tr>
              <th>Address</th>
              <td>{buyerInfo.address}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{buyerInfo.email}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{buyerInfo.phone_number}</td>
            </tr>
          </tbody>
        </table>
        <LinkContainer to="/buyer-form">
          <Button>Edit profile</Button>
        </LinkContainer>
      </div>
    </>
  );
}
