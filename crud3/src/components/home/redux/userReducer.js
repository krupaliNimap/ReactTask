// import {
//   ADD_USER_REQUEST,
//   ADD_USER_SUCCESS,
//   GET_ALL_USER_FAILED,
//   GET_ALL_USER_REQUEST,
//   GET_ALL_USER_SUCCESS,
//   SET_MODAL_OPEN,
// } from "./userTypes";

// const initialState = {
//   allReduxUsers: [],
//   loading: false,
//   error: "",
//   modalRedux: false,
// };

// export const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_ALL_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case GET_ALL_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         allReduxUsers: action.payload,
//       };
//     case GET_ALL_USER_FAILED:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case SET_MODAL_OPEN:
//       return {
//         ...state,
//         modalRedux: action.payload,
//       };
//     default:
//       return { state };
//   }
// };
