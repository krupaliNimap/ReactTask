import { BUY_CAKES, BUY_ICECREAMS } from "./cakeTypes";
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};
export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKES:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};
export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAMS:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    default:
      return state;
  }
};
