import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  shop_name: "Fuji Super",
  shop_location: "17-9 Kaminoge 4 Chome, Setagaya-Ku",
  opening_time: "9:00",
  closing_time: "23:00",
  phone_number: "1234567891",
  shop_lat: '35.6125455',
  shop_long: '139.6396053',
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
