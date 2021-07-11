import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: NewsType = {
  news: [],
};

type NewsType = {
  news: NewsInfo[];
};

type NewsInfo = {
  id: number;
  title: string;
  body: string;
};

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<[]>) => {
      return {
        ...state,
        news: action.payload,
      };
    },
  },
});

export const { getNews } = NewsSlice.actions;

export default NewsSlice.reducer;
