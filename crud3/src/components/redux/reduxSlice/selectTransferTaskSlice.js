import { toast } from "react-hot-toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicGet, publicPost, publicPut } from "../../services/publicRequest";

export const getAllUser = createAsyncThunk("get/allUser", async () => {
  const res = await publicGet("/selectTask");
  return {
    data: res.data || [],
  };
});

export const addSelectTaskUser = createAsyncThunk(
  "add/selectTaskUser",
  async (user) => {
    try {
      const res = await publicPost("/selectTask", user);
    } catch (err) {
      toast.error("Oops, Try again");
    }
  }
);

export const transferSelectedTasks = createAsyncThunk(
  "/transferTask",
  async({id,data},{dispatch}) => {
    try{
      console.log('data', data)
      const res = await publicPut(`/selectTask`,id,data);
      // dispatch(getAllUser())
      toast.success("Successsfully Transferred")
    }catch(err){
      toast.error("Unsuccessful Transfer")
    }
  }
)

export const addTask = createAsyncThunk("post/addTask", async ({data,id},{dispatch}) => {
  try {
    const res = await publicPut(`/selectTask`, id,data);
    dispatch(getAllUser())
  } catch (err) {
    toast.error("Oops, Try again");
  }
});

const initialState = {
  allUser: [],
  loading: false,
};

const selectTaskSlice = createSlice({
  name: "selectTask",
  initialState,
  extraReducers: {
    [getAllUser.fulfilled]: (state, action) => {
      state.allUser = action.payload.data;
    },
  },
});

export default selectTaskSlice.reducer;
