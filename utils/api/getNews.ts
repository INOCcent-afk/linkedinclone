import axios from "axios";

export const getNews = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3"
  );

  return response.data;
};
