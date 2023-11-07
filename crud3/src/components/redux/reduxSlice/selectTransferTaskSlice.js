import { toast } from "react-hot-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicGet, publicPost } from "../../services/publicRequest";
export const getAllSelectTask = createAsyncThunk("get/allSelectTask", async () => {
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

export const addTask = createAsyncThunk("post/addTask",async(data)=>{
  const res = await publicPost("/selectTask",data)
  console.log("res",res)
})

const initialState = {
  allSelectTask: [],
  loading: false,
};

const selectTaskSlice = createSlice({
  name: "slectTask",
  initialState,
  extraReducers: {
    [getAllSelectTask.pending]: (state, action) => {
      console.log("pending")
      state.loading = true;
    },
    [getAllSelectTask.fulfilled]: (state, action) => {
      console.log("fulfilled")
      state.allSelectTask = action.payload.data;
      state.loading = false;
    },
    [getAllSelectTask.rejected]: (state, action) => {
      console.log("rejected")
      state.loading = false;
    },
  },
});

export default selectTaskSlice.reducer;
