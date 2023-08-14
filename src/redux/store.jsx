import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import postsSlice from "./features/postsSlice";

// import getData
export const store = configureStore({
  reducer: { counter: counterSlice, posts: postsSlice },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
