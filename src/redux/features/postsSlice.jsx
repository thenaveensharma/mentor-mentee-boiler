import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  posts: [],
  loading: true,
  error: null,
};
// Generates pending, fulfilled and rejected action types
export const fetchPosts = createAsyncThunk(
  "fetchPosts",
  async (name, { getState, rejectWithValue }) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    if (res.status != 200) {
      return rejectWithValue(res);
    }
    return res.data;
  },
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
  reducers: {},
});
export const { increment, decrement, incrementByAmount } = postsSlice.actions;

export default postsSlice.reducer;
