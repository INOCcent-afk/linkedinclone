import React from "react";

import LeftPanel from "../containers/LeftPanel";
import RightPanel from "../containers/RightPanel";
import CenterPanel from "../containers/CenterPanel";
import NewsContainer from "../containers/NewsContainer";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Groups from "../components/Groups";
import PostInput from "../components/PostInput";
import Post from "../components/Post";

import { getNews } from "../utils/api/getNews";
import { getPosts as getPostFromApi } from "../utils/api/getPosts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getPosts } from "../redux/Posts.slice";
import { useQuery } from "react-query";

import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

import Loader from "react-loader-spinner";

const home = ({ news, postsApi }: any) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const [show, setShow] = React.useState(false);

  const { data } = useQuery("posts", getPostFromApi, {
    initialData: postsApi,
  });

  const [session] = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (!session) {
      router.push("/");
    }
    dispatch(getPosts(data));

    let timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <>
      {!show ? (
        <div className="fixed center-transform">
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <>
          <LeftPanel>
            <Profile />
            <Groups />
          </LeftPanel>
          <CenterPanel>
            <div className="md:hidden w-full">
              <Profile />
            </div>
            <PostInput />
            {posts
              .slice(0)
              .reverse()
              .map((post, index) => (
                <Post
                  key={index}
                  name={session?.user?.name}
                  body={post.body}
                  email={session?.user?.email}
                />
              ))}
          </CenterPanel>
          <RightPanel>
            <NewsContainer news={news} />
            <Footer />
          </RightPanel>
        </>
      )}
    </>
  );
};

export default home;

export const getStaticProps = async () => {
  const news = await getNews();
  const postsApi = await getPostFromApi();

  return { props: { news, postsApi } };
};
