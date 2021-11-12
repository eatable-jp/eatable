import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
