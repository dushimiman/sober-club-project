import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
  name: "aboutUs",
  initialState: { token: "", about: null, isFetching: false, all: null },
  reducers: {
    setAbout(state, action) {
      state.about = action.payload;
    },
    setAll(state, action) {
      state.all = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const aboutActions = aboutSlice.actions;

export default aboutSlice.reducer;
