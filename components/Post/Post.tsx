import React from "react";
import { FC } from "react";

import {
  AnnotationIcon,
  ArrowCircleRightIcon,
  HandIcon,
  ShareIcon,
} from "@heroicons/react/solid";

import { motion } from "framer-motion";

import Box from "../Box";

const variant = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
};

const Post: FC = () => {
  return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="animate"
      className="w-full"
    >
      <Box>
        <div className="p-4">
          <div className="flex gap-5 items-center">
            <div className="relative w-14 h-14 bg-red-300 flex items-center justify-center rounded-full border-2 border-white overflow-hidden">
              <div className="font-bold text-lg">
                <span>D</span>
              </div>
              {/* <img
              className=""
              src="https://avatars.githubusercontent.com/u/68991068?v=4"
              alt="profile-picture"
            /> */}
            </div>
            <div className="text-sm">
              <h1 className="font-bold">Dave Inoc</h1>
              <p className="text-gray-600">michael828inoc@gmail.com</p>
            </div>
          </div>
          <div className="pt-4">
            <p>Wow Its So Cool</p>
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
    </motion.div>
  );
};

export default Post;
