import { createSlice } from "@reduxjs/toolkit";

const updateValueSlice = createSlice({
  name: "updateValue",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return (state = state + 1);
    },
    decrement: (state, action) => {
      return (state = state - 1);
    },
  },
});

export default updateValueSlice.reducer;
export const { increment, decrement } = updateValueSlice.actions;
