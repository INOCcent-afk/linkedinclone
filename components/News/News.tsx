import React, { FC } from "react";

type Props = {
  title: string;
  body: string;
  index: number;
};

const News: FC<Props> = ({ title, body, index }: Props) => {
  return (
    <div className="flex gap-5 px-5 hover:bg-gray-200 text-sm">
      <span className="font-bold">{index}.</span>
      <div className="">
        <p className="font-bold">{body.substring(0, 25) + "..."}</p>
        <p className="text-gray-500">{title.substring(0, 10)}</p>
      </div>
    </div>
  );
};

export default News;
