import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  // original list of items
  items: [],
  // list of filtered items
  filteredItems: [],
};

export const fetchItems = createAsyncThunk(
  'items/fetchAllItems', async() => {
    try{
      const url = process.env.ITEMS_ROUTE || 'http://localhost:8080/items'
      const response = await axios.get(url);
      console.log(response.data)
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
    updateItems: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return state;
    },
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
      state.items = action.payload;
      state.filteredItems = action.payload;
    }
  },
});

export const { updateItems, filterByFoodType } = itemsSlice.actions;
export default itemsSlice.reducer;
