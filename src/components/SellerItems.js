import React, { useState } from "react";
import { useForm } from "react-hook-form";
// redux
import { useSelector, useDispatch } from "react-redux";
import { updateItems } from "../slice/itemsSlice";
// bootstrap
import { Row, Col, Card, Button } from "react-bootstrap";

export default function ListedItems() {
  // setup redux
  const dispatch = useDispatch();
  const sellerInfo = useSelector((state) => state.sellerInfo);
  const items = useSelector((state) => state.items);

  // setup react form
  const { register, handleSubmit, reset } = useForm();

  // function for updating item info
  function sendUpdatedItem(updatedInfo) {
    // validation get rid of empty value
    Object.keys(updatedInfo).forEach((info) => {
      if (updatedInfo[info] === "" || updatedInfo[info] === null) {
        delete updatedInfo[info];
      }
    });
    updatedInfo.id = selectedItem;
    dispatch(updateItems(updatedInfo));
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
  const itemList = items.filter((item) => item.seller_id === sellerInfo.id);
  // generating item card
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {itemList.map((item, index) => {
          return (
            <Col>
              <Card bg= "Light" className="h-100" key={index}>
                {/*<Card.Img variant="top" src={item.image} />*/}
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{sellerInfo.shop_name}</Card.Text>
                  <Card.Text>Best before {item.expiration_date}</Card.Text>
                  <Card.Text>{item.note}</Card.Text>
                  <Card.Text className="item-info-current-price">
                    {item.price} yen
                  </Card.Text>
                  <Button
                    onClick={() => {
                      toggleForm();
                      passSelectedItem(item.id);
                    }}
                    >
                    Edit item
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      {/* form for updating user info */}
      <form
        onSubmit={handleSubmit(sendUpdatedItem)}
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
