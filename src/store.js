import { configureStore } from "@reduxjs/toolkit";
// slices
import sellerInfoReduce from "./slice/sellerInfoSlice";
import buyerInfoReduce from "./slice/buyerInfoSlice";
import cartReducer from "./slice/cartSlice";
import itemsReducer from "./slice/itemsSlice";
import purchasesReducer from "./slice/purchasesSlice";

export default configureStore({
  reducer: {
    sellerInfo: sellerInfoReduce,
    buyerInfo: buyerInfoReduce,
    cart: cartReducer,
    items: itemsReducer,
    purchases: purchasesReducer,
  },
});
