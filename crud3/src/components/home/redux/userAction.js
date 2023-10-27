// import axios from "axios";
// import {
//   GET_ALL_USER_FAILED,
//   GET_ALL_USER_REQUEST,
//   GET_ALL_USER_SUCCESS,
//   SET_MODAL_OPEN,
// } from "./userTypes";
// import { toast } from "react-hot-toast";

// export const getAllUserAction = () => async (dispatch) => {
//   dispatch({ type: GET_ALL_USER_REQUEST });
//   try {
//     const response = await axios.get("http://localhost:8000/user");
//     dispatch({ type: GET_ALL_USER_SUCCESS, payload: response.data });
//   } catch (err) {
//     dispatch({ type: GET_ALL_USER_FAILED, payload: err });
//   }
// };

// export const addUserAction = (data) => async (dispatch) => {
//   alert("redux");
//   try {
//     const response = await axios.post("http://localhost:8000/user", data);
//     dispatch(getAllUserAction());
//   } catch (err) {
//     toast.error(err);
//   }
// };

// export const editUserAction = (id, data) => async (dispatch) => {
//   alert("redux");
//   console.log("data", data);
//   try {
//     const response = await axios.put(`http://localhost:8000/user/${id}`, data);
//     dispatch(getAllUserAction());
//     toast.success("nskdfnvcl");
//   } catch (err) {
//     toast.error(err);
//   }
// };

// export const deleteReduxUser = (data) => async (dispatch) => {
//   try {
//     const response = await axios.delete(`http://localhost:8000/user/${data}`);
//     dispatch(getAllUserAction());
//   } catch (err) {
//     toast.error(err);
//   }
// };
// export const setReduxModalOpen = (value) => async (dispatch) => {
//   alert("Modal open/close");
//   dispatch({ type: SET_MODAL_OPEN, payload: value });
// };
