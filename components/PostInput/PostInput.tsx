import React from "react";

import Box from "../Box";

import {
  CalendarIcon,
  PhotographIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";

const PostInput = () => {
  return (
    <Box>
      <div>
        <div className="flex py-2 px-4 items-center">
          <div className="bg-gray-200 w-20 h-16 flex items-center justify-center rounded-full">
            <UserIcon className="w-6" />
          </div>
          <input
            type="text"
            placeholder="Start a post"
            className="ml-5 w-full py-2 px-4 rounded-3xl border border-gray-300 focus:outline-none"
          />
        </div>
        <div className="flex justify-between py-3 px-4 flex-wrap">
          <div className="text-sm flex gap-2 cursor-pointer ">
            <PhotographIcon className="w-5 text-blue-400" />
            <p className="text-gray-600">Photo</p>
          </div>
          <div className="text-sm flex gap-2 cursor-pointer">
            <VideoCameraIcon className="w-5 text-green-400" />
            <p className="text-gray-600">Video</p>
          </div>
          <div className="text-sm flex gap-2 cursor-pointer">
            <CalendarIcon className="w-5 text-yellow-400" />
            <p className="text-gray-600">Event</p>
          </div>
          <div className="text-sm flex gap-2 cursor-pointer">
            <PhotographIcon className="w-5 text-red-400" />
            <p className="text-gray-600">Write Article</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default PostInput;
