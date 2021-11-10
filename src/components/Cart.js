import React from "react";

function Cart({ buyerInfo, cart, removeFromCart }) {
  return cart.length === 0 ? (
    <p>Nothing in the cart</p>
  ) : (
    <div>
      <h2 className="buyer-items-heading">Hello {buyerInfo.display_name}!</h2>
      <ul>
        {cart.map((item, index) => {
          return (
            <li className="item-card" key={index}>
              <figure>
                <img src={item.image} alt="product image" />
              </figure>
              <div className="item-info">
                <div className="item-info-general">
                  <h3>{item.name}</h3>
                  <p>Expires: {item.expiration_date}</p>
                  <p>{item.note}</p>
                </div>
                <div className="item-info-prices">
                  <p className="item-info-origina-price">
                    {item.original_price} yen
                  </p>
                  <p className="item-info-current-price">{item.price} yen</p>
                  <button onClick={() => removeFromCart(index)}>
                    Remove from cart
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
