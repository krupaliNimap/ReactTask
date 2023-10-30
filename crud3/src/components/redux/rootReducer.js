import { combineReducers } from "redux";
import userRegisterSlice from "./reduxSlice/registerSlice";
import { cakeReducer, iceCreamReducer } from "../task_11/redux/cakeReducer";
import usersSlice from "./reduxSlice/usersSlice";
import selectTaskSlice from "./reduxSlice/selectTransferTaskSlice";

export const rootReducer = {
  userRegisterSlice: userRegisterSlice,
  usersSlice: usersSlice,
  selectTaskSlice: selectTaskSlice,
  cakeReducer: cakeReducer,
  iceCreamReducer: iceCreamReducer,
};
