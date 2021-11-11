import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SellerProfile({ sellerInfo, updateSellerInfo }) {
  // setup react form
  const { register, handleSubmit, reset } = useForm();
  //
  function sendSellerInfo(updatedInfo) {
    // validation get rid of empty value
    Object.keys(updatedInfo).forEach((info) => {
      if (updatedInfo[info] === "" || updatedInfo[info] === null) {
        delete updatedInfo[info];
      }
    });
    updateSellerInfo(updatedInfo);
    reset();
    toggleForm();
  }

  // formDisplay state
  const [formDisplay, setFormDisplay] = useState(false);
  // formDisplay state: function for toggling form
  function toggleForm() {
    setFormDisplay(!formDisplay);
  }
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
        <button onClick={() => toggleForm()}>Edit profile</button>
      </div>
      {/* form for updating user info */}
      <form
        className={formDisplay ? "update-form" : "update-form hidden"}
        onSubmit={handleSubmit(sendSellerInfo)}
      >
        <fieldset className="update-form-fieldset">
          <label className="update-form-label">
            <span>Shop name</span>
            <input type="text" name="shop_name" {...register("shop_name")} />
          </label>
          <label className="update-form-label">
            <span>Address</span>
            <input
              type="text"
              name="shop_location"
              {...register("shop_location")}
            />
          </label>
          <label className="update-form-label">
            <span>Phone number</span>
            <input
              type="text"
              name="phone_number"
              {...register("phone_number")}
            />
          </label>
          <label className="update-form-label">
            <span>Opening time</span>
            <input
              type="text"
              name="opening_time"
              {...register("opening_time")}
            />
          </label>
          <label className="update-form-label">
            <span>Closing time</span>
            <input
              type="text"
              name="closing_time"
              {...register("closing_time")}
            />
          </label>
          <button type="submit">Submit</button>
          <p onClick={() => toggleForm()}>Cancel</p>
        </fieldset>
      </form>
    </>
  );
}
