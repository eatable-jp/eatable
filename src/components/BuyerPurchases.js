import React from "react";
// redux
import { useSelector } from "react-redux";
// bootstrap
import { Accordion } from "react-bootstrap";
// dummy data
import { sellers } from "../data/sellers";

export default function BuyerPurchases() {
  // redux
  const purchases = useSelector((state) => state.purchases);
  return (
    <Accordion defaultActiveKey="0">
      {purchases.map((purchase, index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>{purchase.name}</Accordion.Header>
            <Accordion.Body>
              <dl>
                <dt>Price</dt>
                <dd>{purchase.price} yen</dd>
              </dl>
              <dl>
                <dt>Shop address</dt>
                <dd>
                  {
                    sellers.find((seller) => seller.id === purchase.seller_id)[
                      "shop_location"
                    ]
                  }{" "}
                </dd>
              </dl>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
