import "./App.css";
// components
import Header from "./components/Header";
import SellerItems from "./components/SellerItems";
import ShopProfile from "./components/ShopProfile";
import BuyerItems from "./components/BuyerItems";

function App() {
  const userStatus = "seller";
  // dummy data for seller
  const sellerInfo = {
    id: 1,
    shop_name: "Fresh",
    shop_location: "1-1-1, Tamagawa, Setagaya, Tokyo",
    opening_time: "9:00",
    closing_time: "22:00",
    phone_number: "03-521-778",
  };
  // dummy data for buyer
  const buyerInfo = {
    id: 1,
    display_name: "Test User",
    email: "test@test.com",
    address: "1-1-1, Tamagawa, Setagaya, Tokyo",
    phone_number: "070-5587-1245",
  };

  return (
    <div className="App">
      {/* header component */}
      <Header userStatus={userStatus} />

      {/* displaying different component based on user type */}
      {userStatus === "seller" ? (
        // seller's home
        <div className="seller-wrapper">
          <div className="seller-items">
            <h2 className="seller-items-heading">Currently Listed</h2>
            <button className="seller-items-add-btn">Add a new item</button>
            <SellerItems sellerInfo={sellerInfo} />
          </div>
          <div className="seller-profile">
            <ShopProfile sellerInfo={sellerInfo} />
          </div>
        </div>
      ) : (
        // buyer's home
        <div className="buyer-wrapper">
          <div className="buyer-items">
            <h2 className="buyer-items-heading">
              Hello {buyerInfo.display_name}!
            </h2>
            <BuyerItems buyerInfo={buyerInfo} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
