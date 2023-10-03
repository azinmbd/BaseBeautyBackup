import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setStatus } from "./inquiryStatusSlice"; 

const initialState = {
  data: null,
};

const inquirySlice = createSlice({
  name: "inquiry",
  initialState,
  reducers: {
    submitInquiry(state, action) {
      state.data = action.payload; 
    },
  },
});

export const { submitInquiry } = inquirySlice.actions;

export const fetchInquiry = (formData) => async (dispatch) => {
  try {
    const data = new FormData();
    data.append("calendar", formData.selectedDate);
    data.append("time", formData.time);
    data.append("reservationType", formData.inquiryType);
    data.append("description", formData.description);
    data.append("firstName", formData.first_name);
    data.append("lastName", formData.last_name);
    data.append("imageFile", formData.selectedImage);
    const response = await axios.post(
      "http://localhost:8080/api/reservations",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      }
    );
    dispatch(submitInquiry(response.data));
    dispatch(setStatus(response.status)); 
  } catch (error) {
    console.log(error);
  }
};
export default inquirySlice.reducer;
