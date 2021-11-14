import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  // original list of items
  items: [
    {
      id: 1,
      name: "minced meat",
      image: "https://via.placeholder.com/300x200",
      type: "Meat",
      buyer: null,
      price: 160,
      original_price: 280,
      seller_id: 1,
      expiration_date: "2021-11-10",
      note: "Nice wagyu meat, great deal",
    },
    {
      id: 2,
      name: "salmon sashimi",
      image: "https://via.placeholder.com/300x200",
      type: "Fish",
      buyer: null,
      price: 410,
      original_price: 640,
      seller_id: 1,
      expiration_date: "2021-11-12",
      note: "",
    },
    {
      id: 3,
      name: "onion",
      image: "https://via.placeholder.com/300x200",
      type: "Vegetable",
      buyer: null,
      price: 40,
      original_price: 80,
      seller_id: 2,
      expiration_date: "2021-11-11",
      note: "Onion from Hokkaido, great quality",
    },
    {
      id: 4,
      name: "pork butt",
      image: "https://via.placeholder.com/300x200",
      type: "Meat",
      buyer: null,
      price: 560,
      original_price: 1200,
      seller_id: 1,
      expiration_date: "2021-11-14",
      note: "",
    },
    {
      id: 5,
      name: "mackerel",
      image: "https://via.placeholder.com/300x200",
      type: "Fish",
      buyer: null,
      price: 160,
      original_price: 280,
      seller_id: 3,
      expiration_date: "2021-11-11",
      note: "Mackerel this season is great, good buy",
    },
    {
      id: 6,
      name: "avocado",
      image: "https://via.placeholder.com/300x200",
      type: "Vegetable",
      buyer: null,
      price: 140,
      original_price: 210,
      seller_id: 1,
      expiration_date: "2021-11-10",
      note: "",
    },
    {
      id: 7,
      name: "tomato",
      image: "https://via.placeholder.com/300x200",
      type: "Vegetable",
      buyer: null,
      price: 160,
      original_price: 280,
      seller_id: 1,
      expiration_date: "2021-11-12",
      note: "",
    },
  ],
  // list of filtered items
  filteredItems: [
    {
      id: 1,
      name: "minced meat",
      image: "https://via.placeholder.com/300x200",
      type: "Meat",
      buyer: null,
      price: 160,
      original_price: 280,
      seller_id: 1,
      expiration_date: "2021-11-10",
      note: "Nice wagyu meat, great deal",
    },
    {
      id: 2,
      name: "salmon sashimi",
      image: "https://via.placeholder.com/300x200",
      type: "Fish",
      buyer: null,
      price: 410,
      original_price: 640,
      seller_id: 1,
      expiration_date: "2021-11-12",
      note: "",
    },
    {
      id: 3,
      name: "onion",
      image: "https://via.placeholder.com/300x200",
      type: "Vegetable",
      buyer: null,
      price: 40,
      original_price: 80,
      seller_id: 2,
      expiration_date: "2021-11-11",
      note: "Onion from Hokkaido, great quality",
    },
    {
      id: 4,
      name: "pork butt",
      image: "https://via.placeholder.com/300x200",
      type: "Meat",
      buyer: null,
      price: 560,
      original_price: 1200,
      seller_id: 1,
      expiration_date: "2021-11-14",
      note: "",
    },
    {
      id: 5,
      name: "mackerel",
      image: "https://via.placeholder.com/300x200",
      type: "Fish",
      buyer: null,
      price: 160,
      original_price: 280,
      seller_id: 3,
      expiration_date: "2021-11-11",
      note: "Mackerel this season is great, good buy",
    },
    {
      id: 6,
      name: "avocado",
      image: "https://via.placeholder.com/300x200",
      type: "Vegetable",
      buyer: null,
      price: 140,
      original_price: 210,
      seller_id: 1,
      expiration_date: "2021-11-10",
      note: "",
    },
    {
      id: 7,
      name: "tomato",
      image: "https://via.placeholder.com/300x200",
      type: "Vegetable",
      buyer: null,
      price: 160,
      original_price: 280,
      seller_id: 1,
      expiration_date: "2021-11-12",
      note: "",
    },
  ],
};

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
  extraReducers: {},
});

export const { updateItems, filterByFoodType } = itemsSlice.actions;
export default itemsSlice.reducer;
