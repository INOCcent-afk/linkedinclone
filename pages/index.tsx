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

const Home = ({ news }: any) => {
  return (
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
        <Post />
        <Post />
      </CenterPanel>
      <RightPanel>
        <NewsContainer news={news} />
        <Footer />
      </RightPanel>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const news = await getNews();

  return { props: { news } };
};
