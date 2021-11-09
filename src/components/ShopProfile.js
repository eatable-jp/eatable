export default function ShopProfile({ sellerInfo }) {
  return (
    <div className="seller-profile">
      <figure className="shop-profile-img">
        <img src="https://via.placeholder.com/300x200" alt="seller profile" />
      </figure>
      <div>
        <p className="shop-profile-name">{sellerInfo.shop_name}</p>
        <p className="shop-profile-address">{sellerInfo.shop_location}</p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
}
