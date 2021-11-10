import "./App.css";
// components
import Header from "./components/Header";
import SellerHome from "./components/SellerHome";
import BuyerHome from "./components/BuyerHome";

function App() {
  const userStatus = "buyer";
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
        <SellerHome sellerInfo={sellerInfo} />
      ) : (
        // buyer's home
        <BuyerHome buyerInfo={buyerInfo} />
      )}
    </div>
  );
}

export default App;
