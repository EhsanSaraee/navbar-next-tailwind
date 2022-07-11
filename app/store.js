import { configureStore } from '@reduxjs/toolkit';
import posts from '../features/postsSlice';

export const store = configureStore({
   reducer: {
      posts,
   },
});
