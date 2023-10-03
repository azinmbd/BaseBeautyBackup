import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: null,
};

const inquiryStatusSlice = createSlice({
  name: "inquiryStatus",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = inquiryStatusSlice.actions;

export default inquiryStatusSlice.reducer;
