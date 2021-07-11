import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get(
    "https://damp-dusk-47703.herokuapp.com/posts"
  );

  return response.data;
};
