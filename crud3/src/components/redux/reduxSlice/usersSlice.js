import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  privateDelete,
  privateGet,
  privatePost,
  privatePut,
} from "../../services/privateRequest";
import { toast } from "react-hot-toast";

const initialState = {
  users: [],
  loading: false,
};

export const getAllReduxUser = createAsyncThunk(
  "/getAllUser",
  async (endPoints) => {
    try {
      const res = await privateGet(endPoints);
      return { data: res?.data || [] };
    } catch (err) {
      toast.error("Something went wrong", err);
    }
  }
);

export const addReduxUser = createAsyncThunk(
  "/addUser",
  async (endPoints, data, { dispatch }) => {
    try {
      const res = await privatePost(endPoints, data);
      dispatch(getAllReduxUser("/user"));
    } catch (err) {
      toast.error("Something went wrong.", err);
    }
  }
);

export const editReduxUser = createAsyncThunk(
  "/editUser",
  async (endPoints, id, data, { dispatch }) => {
    try {
      const res = await privatePut(`${endPoints}/${id}`, data);
      dispatch(getAllReduxUser("/user"));
    } catch (err) {
      toast.error("Something went wrong.", err);
    }
  }
);

export const deleteReduxUser = createAsyncThunk(
  "/deleteUser",
  async (endPoints, id, { dispatch }) => {
    try {
      const res = await privateDelete(`${endPoints}/${id}`);
      dispatch(getAllReduxUser("/user"));
    } catch (err) {
      toast.error("something went wrong", err);
    }
  }
);

const usersSlice = createSlice({
  name: "USERS",
  initialState,
  extraReducers: {
    [getAllReduxUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllReduxUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload.data;
    },
    [getAllReduxUser.rejected]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
  },
});

export default usersSlice.reducer;
