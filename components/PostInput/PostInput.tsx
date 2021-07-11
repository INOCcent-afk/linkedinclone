import React, { FC, SyntheticEvent } from "react";

import Box from "../Box";

import {
  CalendarIcon,
  ChevronDoubleRightIcon,
  PhotographIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";

import { useAppDispatch } from "../../redux/hooks";
import { createPost } from "../../redux/Posts.slice";

import { createPost as createPostFromApi } from "../../utils/api/createPost";
import { useMutation } from "react-query";
import { useSession } from "next-auth/client";

const PostInput: FC = () => {
  const [session] = useSession();
  const [postData, setPostData] = React.useState({
    body: "",
    name: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image,
  });

  const dispatch = useAppDispatch();

  const { mutateAsync: AddPost } = useMutation(createPostFromApi);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    AddPost(postData);
    dispatch(createPost(postData));

    setPostData({
      body: "",
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
    });
  };

  return (
    <Box>
      <div>
        <form onSubmit={handleSubmit} className="flex py-2 px-4 items-center">
          <div className="bg-gray-200 w-20 h-16 flex items-center justify-center rounded-full">
            <UserIcon className="w-6" />
          </div>
          <div className="relative w-full py-2 pr-4">
            <input
              required
              type="text"
              placeholder="Start a post"
              className="ml-5 w-full p-2 pl-4 rounded-3xl border border-gray-300 focus:outline-none"
              value={postData.body}
              onChange={(e) =>
                setPostData({ ...postData, body: e.target.value })
              }
            />
            {postData.body.length ? (
              <button className="absolute ttranslate right-3 top-2/4 cursor-pointer">
                <ChevronDoubleRightIcon
                  type="submit"
                  className="w-5 text-blue-700"
                />
              </button>
            ) : null}
          </div>
        </form>
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
