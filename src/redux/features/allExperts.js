import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

const allExperts = createSlice({
  name: "allExperts",
  initialState,
  reducers: {
    getListSucess(state, action) {
      state.data = action.payload;
    },
  },
});
export const { getListSucess } = allExperts.actions;

export const fetchAllExtperts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/experts/getallexperts"
    );
    dispatch(getListSucess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default allExperts.reducer;
