import { toast } from "react-hot-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicGet } from "../../services/publicRequest";
const getAllSelectTask = createAsyncThunk("get/allSelectTask", async () => {
  try {
    const res = await publicGet("/selectTask");
    console.log("res", res);
    return {
      data: res.data || [],
    };
  } catch (err) {
    toast.error("Something went wrong", err);
  }
});

const initialState = {
  allSelectTask: [],
  loading: false,
};

const selectTaskSlice = createSlice({
  name: "slectTask",
  initialState,
  extraReducers: {
    [getAllSelectTask.pending]: (state, payload) => {
      state.loading = true;
    },
    [getAllSelectTask.fulfilled]: (state, payload) => {
      state.allSelectTask = payload.data;
      state.loading = false;
    },
    [getAllSelectTask.rejected]: (state, payload) => {
      state.loading = false;
    },
  },
});

export default selectTaskSlice.reducer;
