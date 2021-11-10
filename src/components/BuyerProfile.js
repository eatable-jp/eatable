import React from "react";

export default function BuyerProfile({ buyerInfo }) {
  return (
    <div className="buyer-profile">
      <h2 className="buyer-profile-name">{buyerInfo.display_name}</h2>
      <table className="buyer-profile-table">
        <tbody>
          <tr>
            <th>Address</th>
            <tb>{buyerInfo.address}</tb>
          </tr>
          <tr>
            <th>Email</th>
            <tb>{buyerInfo.email}</tb>
          </tr>
          <tr>
            <th>Phone number</th>
            <tb>{buyerInfo.phone_number}</tb>
          </tr>
        </tbody>
      </table>
      <button>Edit profile</button>
    </div>
  );
}
