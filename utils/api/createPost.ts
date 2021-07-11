import axios from "axios";

export const createPost = async (newPost: any) => {
  const response = await axios.post(
    "https://damp-dusk-47703.herokuapp.com/posts",
    newPost
  );
};
