import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  shop_name: "Fresh",
  shop_location: "1-1-1, Tamagawa, Setagaya, Tokyo",
  opening_time: "9:00",
  closing_time: "22:00",
  phone_number: "03-521-778",
};

const sellerInfoSlice = createSlice({
  name: "sellerInfo",
  initialState,
  reducers: {
    updateSellerInfo: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
  extraReducers: {},
});

export const { updateSellerInfo } = sellerInfoSlice.actions;
export default sellerInfoSlice.reducer;
