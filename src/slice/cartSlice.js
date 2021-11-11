import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    removeFromCart: (state, action) => {
      state = state.filter((item, i) => i !== action.payload);
      return state;
    },
  },
  extraReducers: {},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
