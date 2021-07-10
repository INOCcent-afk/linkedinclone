import { BookmarkIcon, UserAddIcon } from "@heroicons/react/solid";
import React from "react";
import Box from "../Box";

const Profile = () => {
  return (
    <Box>
      <div>
        <div className="h-16 w-full bg-blue-500"></div>
        <div className="relative w-20 h-20 bg-red-300 flex items-center justify-center rounded-full border-2 border-white -mt-10 mx-auto overflow-hidden">
          <div className="font-bold text-lg">
            <span>D</span>
          </div>
          {/* <img
            className=""
            src="https://avatars.githubusercontent.com/u/68991068?v=4"
            alt="profile-picture"
          /> */}
        </div>
        <div className="flex justify-center flex-col items-center py-2 gap-2">
          <h1 className="font-bold">Dave Inoc</h1>
          <span className="text-sm text-blue-400">Add a photo</span>
        </div>
      </div>
      <div className="hidden md:flex items-start justify-between px-4 border-t py-2">
        <div className="text-sm">
          <p className="text-gray-500">Connections</p>
          <p>Grow your networkd</p>
        </div>
        <UserAddIcon className="w-6" />
      </div>
      <div className="hidden hover:flex items-center gap-4 border-t px-2 py-2">
        <BookmarkIcon className="w-6" />
        <p className="text-sm">My Items</p>
      </div>
    </Box>
  );
};

export default Profile;
