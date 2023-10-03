import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "",
  userinfo: {},
};

const addExpertToDb = createSlice({
  name: "addExpert",
  initialState,
  reducers: {
    addExpert(state, action) {
      state.status = action.payload.Status;
      state.userinfo = action.payload.Userinfo;
    },
  },
});

export const { addExpert } = addExpertToDb.actions;

export const fetchExpertAdd = (expertData) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("expertFirstName", expertData.expertFirstName);
    formData.append("expertLastName", expertData.expertLastName);
    formData.append("expertServiceArea", expertData.expertServiceArea);
    formData.append("expertDescription", expertData.expertDescription);
    formData.append("expertImage", expertData.selectedImage);
    const response = await axios.post(
      "http://localhost:8080/api/experts/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch(addExpert(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default addExpertToDb.reducer;
