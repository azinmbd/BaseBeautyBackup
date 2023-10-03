import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/authSlice";
import skinCareReducer from "../redux/features/skincareSlice";
import nailCareReducer from "../redux/features/nailcareSlice";
import makeupReducer from "../redux/features/makeupSlice";
import allExpertsReducer from "../redux/features/allExperts";
import inquiryReducer from "../redux/features/inquirySlice";
import inquiryStatusReducer from "../redux/features/inquiryStatusSlice";
import registerReducer from "../redux/features/userRegisterSlice";
import packageTypeReducer from "../redux/features/packageSlice";
import addExpertReducer from "../redux/features/AddExpertSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["omitedPart", "inquiryStatus", "addExpert", "packageType.status"],
};
const reducer = combineReducers({
  auth: authReducer,
  skincare: skinCareReducer,
  nailcare: nailCareReducer,
  makeup: makeupReducer,
  inquiry: inquiryReducer,
  inquiryStatus: inquiryStatusReducer,
  packageType: packageTypeReducer,
  allExperts: allExpertsReducer,
  userRegister: registerReducer,
  addExpert: addExpertReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
