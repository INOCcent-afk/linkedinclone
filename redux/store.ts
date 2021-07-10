import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "./News.slice";
import PostsReducer from "./Posts.slice";

const store = configureStore({
  reducer: {
    news: NewsReducer,
    posts: PostsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
