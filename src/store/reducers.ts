import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fooditems: Array(),
  showform: false,
  showdialog: false,
  index: 0,
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

    showForm: (state, { payload }) => {
      state.showform = payload;
    },
    showDialog: (state, { payload }) => {
      state.showdialog = payload.bool;
      state.index = payload.index;
    },
  },
});

export const { addItem, removeItem, updateItem, showForm, showDialog } =
  foodSlice.actions;

export default foodSlice.reducer;
