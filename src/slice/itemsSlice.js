import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  // original list of items
  items: [],
  filteredItems: [],
};

export const fetchItems = createAsyncThunk(
  'items/fetchAllItems', async() => {
    try{
      console.log("trying")
      const response = await axios.get('/items');
      console.log(response.data)
      return response.data;
    }catch(error){
      console.log("didn't try")
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
      console.log(action.payload);
      console.log("working")
      state.items = action.payload;
      state.filteredItems = action.payload;
    }
  },
});

export const { updateItems, filterByFoodType } = itemsSlice.actions;
export default itemsSlice.reducer;
