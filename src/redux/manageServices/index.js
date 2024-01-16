import { createSlice } from "@reduxjs/toolkit";

const webServiceSlice = createSlice({
  name: "webService",
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

export const webServiceActions = webServiceSlice.actions;

export default webServiceSlice.reducer;
