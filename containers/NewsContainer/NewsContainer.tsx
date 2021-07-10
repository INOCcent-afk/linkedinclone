import React from "react";
import { FC } from "react";
import Box from "../../components/Box";
import News from "../../components/News";

import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getNews } from "../../redux/News.slice";

type Props = {
  news: [];
};

const NewsContainer: FC<Props> = ({ news }: Props) => {
  const dispatch = useAppDispatch();

  const newsData = useAppSelector((state) => state.news.news);

  React.useEffect(() => {
    dispatch(getNews(news));
  }, []);

  return (
    <Box>
      <h1 className="py-2 px-5">Today's top courses</h1>

      {newsData.map((news) => (
        <News
          key={news.id}
          index={news.id}
          title={news.title}
          body={news.body}
        />
      ))}
      <div className="flex px-5 gap-2 items-center pb-2 cursor-pointer">
        <h1 className="text-sm text-gray-500">
          Show more on Linkedin Learning
        </h1>
        <ArrowNarrowRightIcon className="w-6 text-gray-500" />
      </div>
    </Box>
  );
};

export default NewsContainer;
