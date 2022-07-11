import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
   posts: [],
   status: 'idle',
   error: null,
};

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
   const response = await axios.get(BASE_URL);
   return response.data;
});

const postsSlice = createSlice({
   name: 'posts',
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(getPosts.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(getPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
         })
         .addCase(getPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
         });
   },
});

export const useGetPosts = () => useSelector((state) => state.posts);

export default postsSlice.reducer;
