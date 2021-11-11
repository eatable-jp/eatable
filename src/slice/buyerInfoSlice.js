import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  display_name: "Test User",
  email: "test@test.com",
  address: "1-1-1, Tamagawa, Setagaya, Tokyo",
  phone_number: "070-5587-1245",
};

const buyerInfoSlice = createSlice({
  name: "buyerInfo",
  initialState,
  reducers: {
    updateBuyerInfo: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
  extraReducers: {},
});

export const { updateBuyerInfo } = buyerInfoSlice.actions;
export default buyerInfoSlice.reducer;
