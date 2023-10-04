import { BUY_CAKES, BUY_ICECREAMS } from "./cakeTypes";
export const buyCakeAction = (number = 1) => {
  return {
    type: BUY_CAKES,
    payload: number,
  };
};
export const buyIcecreamAction = (number = 1) => {
  return {
    type: BUY_ICECREAMS,
    payload: number,
  };
};
