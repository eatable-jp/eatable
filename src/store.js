import { configureStore } from "@reduxjs/toolkit";
// slices
import sellerInfoReduce from "./slice/sellerInfoSlice";
import buyerInfoReduce from "./slice/buyerInfoSlice";
import cartReducer from "./slice/cartSlice";
import itemsReducer from "./slice/itemsSlice";
import purchasesReducer from "./slice/purchasesSlice";
import locationReducer from "./slice/locationSlice";
import sellersReducer from "./slice/sellersSlice";
import loginReducer from "./slice/loginSlice"
import userReducer from "./slice/userSlice"

export default configureStore({
  reducer: {
    sellerInfo: sellerInfoReduce,
    buyerInfo: buyerInfoReduce,
    cart: cartReducer,
    items: itemsReducer,
    purchases: purchasesReducer,
    location: locationReducer,
    sellers: sellersReducer ,
    login: loginReducer,
    user: userReducer
  },
});
