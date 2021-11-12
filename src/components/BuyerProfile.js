import React, { useState } from "react";
import { useForm } from "react-hook-form";
// redux
import { useSelector, useDispatch } from "react-redux";
import { updateBuyerInfo } from "../slice/buyerInfoSlice";
// bootstrap
import { Form } from "react-bootstrap";

export default function BuyerProfile() {
  // setup redux
  const dispatch = useDispatch();
  const buyerInfo = useSelector((state) => state.buyerInfo);

  // setup react form
  const { register, handleSubmit, reset } = useForm();
  // function for updating user info
  function sendBuyerInfo(updatedInfo) {
    // validation get rid of empty value
    Object.keys(updatedInfo).forEach((info) => {
      if (updatedInfo[info] === "" || updatedInfo[info] === null) {
        delete updatedInfo[info];
      }
    });
    dispatch(updateBuyerInfo(updatedInfo));
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
        <button onClick={() => toggleForm()}>Edit profile</button>
      </div>
      {/* form for updating user info */}
      <Form
        className={formDisplay ? "update-form" : "update-form hidden"}
        onSubmit={handleSubmit(sendBuyerInfo)}
      >
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <fieldset className="update-form-fieldset">
          <label className="update-form-label">
            <span>Name</span>
            <input
              type="text"
              name="display_name"
              {...register("display_name")}
            />
          </label>
          <label className="update-form-label">
            <span>Address</span>
            <input type="text" name="address" {...register("address")} />
          </label>
          <label className="update-form-label">
            <span>Email</span>
            <input type="text" name="email" {...register("email")} />
          </label>
          <label className="update-form-label">
            <span>Phone number</span>
            <input
              type="text"
              name="phone_number"
              {...register("phone_number")}
            />
          </label>
          <button type="submit">Submit</button>
          <p onClick={() => toggleForm()}>Cancel</p>
        </fieldset>
      </Form>
    </>
  );
}
