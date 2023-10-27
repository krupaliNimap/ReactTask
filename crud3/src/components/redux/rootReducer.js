import { combineReducers } from "redux";
import userRegisterSlice from "./reduxSlice/registerSlice";
import { cakeReducer, iceCreamReducer } from "../task_11/redux/cakeReducer";
import usersSlice from "./reduxSlice/usersSlice";

export const rootReducer = {
  userRegisterSlice: userRegisterSlice,
  usersSlice: usersSlice,
  cakeReducer: cakeReducer,
  iceCreamReducer: iceCreamReducer,
};
