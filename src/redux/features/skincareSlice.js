import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

const skincare = createSlice({
  name: "skincare",
  initialState,
  reducers: {
    getListSucess(state, action) {
      state.data = action.payload;
    },
  },
});
export const { getListSucess } = skincare.actions;

export const fetchSkincare = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/experts/getskincareexperts"
    );
    dispatch(getListSucess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default skincare.reducer;
