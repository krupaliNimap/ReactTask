import { combineReducers } from "redux";
import { cakeReducer, iceCreamReducer } from "./cakeReducer";

export const rootReducer = combineReducers({
  cakeReducer: cakeReducer,
  iceCreamReducer: iceCreamReducer,
});
