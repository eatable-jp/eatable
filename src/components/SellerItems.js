// data
import { listedItems } from "../data/listeItems";

export default function ListedItems({ sellerInfo: { id, shop_name } }) {
  // filtering items that matches logged in seller
  const itemList = listedItems.filter((item) => item.seller_id === id);
  // generating item card
  return itemList.map((item, index) => {
    return (
      <div className="item-card" key={index}>
        <figure>
          <img src={item.image} alt="product img" />
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
          </div>
        </div>
      </div>
    );
  });
}
