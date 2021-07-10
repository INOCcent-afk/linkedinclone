import axios from "axios";

export const createPost = async (newPost: any) => {
  const response = await axios.post("http://localhost:5000/posts", newPost);
};
