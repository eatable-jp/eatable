import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  // original list of items
  items: [],
  // list of filtered items
  filteredItems: [],
};

export const fetchItems = createAsyncThunk(
  'items/fetchItems', async() => {
    try{
      const url = process.env.ITEMS_ROUTE || 'http://localhost:8080/items'
      const response = await axios.get(url);
      return response.data;
    }catch(error){
      console.log(error);
    }
  }
)

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    filterByFoodType: (state, action) => {
      state.filteredItems =
        action.payload === "all"
          ? state.items
          : state.items.filter((item) => item.type === action.payload);
      return state;
    },
  },
  extraReducers: {
    [fetchItems.fulfilled]: (state, action) => {
      const itemsForSale = action.payload.filter((item) => item.buyer_id === 0 || item.buyer_id === null);
      state.items = itemsForSale;
      state.filteredItems = itemsForSale;
    }
  },
});

export const { filterByFoodType } = itemsSlice.actions;
export default itemsSlice.reducer;
