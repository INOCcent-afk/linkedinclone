import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PostsType = {
  posts: [],
};

type PostsType = {
  posts: PostType[];
};

type PostType = {
  _id: number;
  name: string;
  email: string;
  body: string;
  image: string;
};

export const PostsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<[]>) => {
      return {
        ...state,
        posts: action.payload,
      };
    },

    createPost: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    },
  },
});

export const { getPosts, createPost } = PostsSlice.actions;

export default PostsSlice.reducer;
