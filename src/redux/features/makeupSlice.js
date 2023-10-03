import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

const makeup = createSlice({
  name: "makeup",
  initialState,
  reducers: {
    getListSucess(state, action) {
      state.data = action.payload;
    },
  },
});
export const { getListSucess } = makeup.actions;

export const fetchMakeup = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/experts/getmakeupexperts"
    );
    dispatch(getListSucess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default makeup.reducer;
