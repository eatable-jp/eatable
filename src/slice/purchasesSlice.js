import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Axios
import axios from "axios";

const initialState = [];

const fetchPurchase = createAsyncThunk("purchases/fetchPurchases", async ()=>{
  const url = process.env.ITEMS_ROUTE || 'http://localhost:8080/items'
  const items = await axios.get(url)
  return items.data
})

const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {
    updatePurchase: (state, action) => {
      state = [...state, ...action.payload];
      return state;
    },
  },
  extraReducers: {
    [fetchPurchase.fulfilled]: (state, action)=>{
      
    }
  },
});

export const { updatePurchase } = purchasesSlice.actions;
export default purchasesSlice.reducer;
