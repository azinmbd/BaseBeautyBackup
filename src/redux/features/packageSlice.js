import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
  userinfo: {},
};

const packageType = createSlice({
  name: "package",
  initialState,
  reducers: {
    getPackage(state, action) {
      state.status = action.payload.Status;
      state.userinfo = action.payload.Userinfo;
    },
  },
});

export const { getPackage } = packageType.actions;

export const fetchPackage = ({ customerEmail, customerPackage, customerSessionLeft }) => async (dispatch) => {
  try {
    const queryParams = new URLSearchParams({
      customerEmail,
      customerPackage,
      customerSessionLeft,
    });

    const response = await axios.post(
      `http://localhost:8080/api/customers/getPackageInfo?${queryParams.toString()}`,
      null,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { Status, Userinfo } = response.data;
    console.log(response)
    dispatch(getPackage({ Status, Userinfo }));
  } catch (error) {
    console.log(error);
  }
};

export default packageType.reducer;
