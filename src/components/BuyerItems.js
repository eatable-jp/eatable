// redux
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slice/cartSlice";
// dummy data
import { sellers } from "../data/sellers";

export default function BuyerItems() {
  // setup redux
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  return items.map((item, index) => {
    return (
      <div className="item-card" key={index}>
        <figure>
          <img src={item.image} alt="product image" />
        </figure>
        <div className="item-info">
          <div className="item-info-general">
            <h3>{item.name}</h3>
            <p>
              {
                sellers.find((seller) => seller.id === item.seller_id)[
                  "shop_name"
                ]
              }
            </p>
            <p>Expires: {item.expiration_date}</p>
            <p>{item.note}</p>
          </div>
          <div className="item-info-prices">
            <p className="item-info-origina-price">{item.original_price} yen</p>
            <p className="item-info-current-price">{item.price} yen</p>
            <button onClick={() => dispatch(addToCart(item))}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  });
}
