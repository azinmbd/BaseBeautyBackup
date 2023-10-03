import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

const nailcare = createSlice({
  name: "nailcare",
  initialState,
  reducers: {
    getListSucess(state, action) {
      state.data = action.payload;
    },
  },
});
export const { getListSucess } = nailcare.actions;

export const fetchNailcare = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/experts/getnailcareexperts"
    );
    dispatch(getListSucess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default nailcare.reducer;
