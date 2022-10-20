import { createSlice } from "@reduxjs/toolkit";
import api from "../api";
import { amount } from "../type";

const initialState: amount = api.data.amount;

const pledgeSlice = createSlice({
  name: "pledge",
  initialState,
  reducers: {
    pledgeDecremented(state, action) {
      switch (action.payload.pledge) {
        case 25:
          return {
            ...state,
            amount25: state.amount25 - 1,
          };
        case 75:
          return {
            ...state,
            amount75: state.amount75 - 1,
          };
        case 200:
          return {
            ...state,
            amount200: state.amount200 - 1,
          };
          default:
            return state
      }
    },
  },
});

export const { pledgeDecremented } = pledgeSlice.actions;
export default pledgeSlice.reducer;
