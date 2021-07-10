import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "./News.slice";

const store = configureStore({
  reducer: {
    news: NewsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
