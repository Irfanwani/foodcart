import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fooditems: Array(),
};

const foodSlice = createSlice({
  name: "foodSlice",
  initialState,
  reducers: {
    addItem: ({ fooditems }, { payload }) => {
      fooditems.push(payload);
    },
    removeItem: ({ fooditems }, { payload }) => {
      fooditems.splice(payload, 1);
    },
    updateItem: ({ fooditems }, { payload }) => {
      fooditems.splice(payload.id, 1, {
        name: payload.name,
        price: payload.price,
      });
    },
  },
});

export const { addItem, removeItem, updateItem } = foodSlice.actions;

export default foodSlice.reducer;
