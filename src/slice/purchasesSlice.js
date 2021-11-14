import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {
    updatePurchase: (state, action) => {
      state = [...state, ...action.payload];
      return state;
    },
  },
  extraReducers: {},
});

export const { updatePurchase } = purchasesSlice.actions;
export default purchasesSlice.reducer;
