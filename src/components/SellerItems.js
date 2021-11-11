import React, { useState } from "react";
import { useForm } from "react-hook-form";
// data
import { listedItems } from "../data/listeItems";

export default function ListedItems({ sellerInfo: { id, shop_name } }) {
  // setup react form
  const { register, handleSubmit, reset } = useForm();

  // items state
  const [items, setItems] = useState(listedItems);
  // items state: function for updating item info
  function updateItem(updatedInfo) {
    Object.keys(updatedInfo).forEach((info) => {
      if (updatedInfo[info] === "" || updatedInfo[info] === null) {
        delete updatedInfo[info];
      }
    });
    updatedInfo.id = selectedItem;
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === updatedInfo.id) {
          return { ...item, ...updatedInfo };
        }
        return item;
      });
      return updatedItems;
    });
    reset();
    toggleForm();
  }

  // selectedItem state
  const [selectedItem, setSelectedItem] = useState("");
  // selectedItem state: function to keep track of selected item
  function passSelectedItem(id) {
    setSelectedItem(id);
  }

  // formDisplay state
  const [formDisplay, setFormDisplay] = useState(false);
  // formDisplay state: function for toggling form
  function toggleForm() {
    setFormDisplay(!formDisplay);
  }

  // filtering items that matches logged in seller
  const itemList = items.filter((item) => item.seller_id === id);
  // generating item card
  return (
    <>
      {itemList.map((item, index) => {
        return (
          <div className="item-card" key={index}>
            <figure>
              <img src={item.image} alt={item.name} />
            </figure>
            <div className="item-info">
              <div className="item-info-general">
                <h3>{item.name}</h3>
                <p>{shop_name}</p>
                <p>Expires: {item.expiration_date}</p>
                <p>{item.note}</p>
              </div>
              <div className="item-info-prices">
                <p className="item-info-current-price">{item.price} yen</p>
                <button
                  onClick={() => {
                    toggleForm();
                    passSelectedItem(item.id);
                  }}
                >
                  Edit item
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* form for updating user info */}
      <form
        onSubmit={handleSubmit(updateItem)}
        className={formDisplay ? "update-form" : "update-form hidden"}
      >
        <fieldset className="update-form-fieldset">
          <label className="update-form-label">
            <span>Item name</span>
            <input type="text" name="name" {...register("name")} />
          </label>
          <label className="update-form-label">
            <span>Type</span>
            <input type="text" name="type" {...register("type")} />
          </label>
          <label className="update-form-label">
            <span>Price</span>
            <input type="text" name="price" {...register("price")} />
          </label>
          <label className="update-form-label">
            <span>Original price</span>
            <input
              type="text"
              name="original_price"
              {...register("original_price")}
            />
          </label>
          <label className="update-form-label">
            <span>Expiration date</span>
            <input
              type="text"
              name="expiration_date"
              {...register("expiration_date")}
            />
          </label>
          <label className="update-form-label">
            <span>Note</span>
            <input type="text" name="note" {...register("note")} />
          </label>
          <button type="submit">Submit</button>
          <p
            onClick={() => {
              reset();
              toggleForm();
            }}
          >
            Cancel
          </p>
        </fieldset>
      </form>
    </>
  );
}
