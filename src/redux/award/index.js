import { createSlice } from "@reduxjs/toolkit";

const awardSlice = createSlice({
  name: "award",
  initialState: { token: "", new: null, isFetching: false, all: null },
  reducers: {
    setnew(state, action) {
      state.new = action.payload;
    },
    setAll(state, action) {
      state.all = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const awardActions = awardSlice.actions;

export default awardSlice.reducer;
