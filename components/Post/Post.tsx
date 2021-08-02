import React from "react";
import { FC } from "react";

import {
  AnnotationIcon,
  ArrowCircleRightIcon,
  HandIcon,
  ShareIcon,
} from "@heroicons/react/solid";

import Image from "next/image";

import Box from "../Box";

type Props = {
  email?: string | null;
  name?: string | null;
  body: string;
  image?: string;
};

const Post: FC<Props> = ({ email, name, body, image }: Props) => {
  return (
    <Box>
      <div className="p-4">
        <div className="flex gap-5 items-center">
          <div className="relative w-14 h-14 bg-red-300 flex items-center justify-center rounded-full border-2 border-white overflow-hidden">
            {image ? (
              <Image
                loader={() => image}
                width="56"
                height="56"
                src={image}
                alt="profile-picture"
              />
            ) : (
              <div className="font-bold text-lg">
                <span>{name?.charAt(0)}</span>
              </div>
            )}
          </div>
          <div className="text-sm">
            <h1 className="font-bold">{name}</h1>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
        <div className="pt-4">
          <p>{body}</p>
        </div>
        <div className="flex justify-between pt-4 flex-wrap">
          <div className="text-sm flex gap-2 cursor-pointer ">
            <HandIcon className="w-5" />
            <p className="text-gray-600">Like</p>
          </div>
          <div className="text-sm flex gap-2 cursor-pointer">
            <AnnotationIcon className="w-5" />
            <p className="text-gray-600">Video</p>
          </div>
          <div className="text-sm flex gap-2 cursor-pointer">
            <ShareIcon className="w-5" />
            <p className="text-gray-600">Event</p>
          </div>
          <div className="text-sm flex gap-2 cursor-pointer">
            <ArrowCircleRightIcon className="w-5" />
            <p className="text-gray-600">Write Article</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Post;
