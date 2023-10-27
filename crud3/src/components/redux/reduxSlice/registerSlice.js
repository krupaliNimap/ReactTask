import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicGet, publicPost } from "../../services/publicRequest";
import { toast } from "react-hot-toast";

const initialState = {
  registerUsers: [],
  loading: false,
};

export const getUserRegister = createAsyncThunk("/register", async () => {
  const res = await publicGet("/registeredUsers");
  return {
    data: res?.data || [],
  };
});

export const addUserRegister = createAsyncThunk(
  "addRegisterUser",
  async (data) => {
    try {
      const res = await publicPost("/registeredUsers", data);
      toast.success("User Added Successfully");
      return {
        data: res.data || [],
      };
    } catch (err) {
      toast.error("Something went wrong", err);
    }
  }
);

const userRegisterSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: {
    [getUserRegister.pending]: (state) => {
      state.loading = true;
    },
    [getUserRegister.fulfilled]: (state, action) => {
      state.loading = false;
      state.registerUsers = action.payload.data;
    },
    [getUserRegister.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default userRegisterSlice.reducer;
