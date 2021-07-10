import React from "react";

import Box from "../Box";

import { BookmarkIcon, UserAddIcon } from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/client";

const Profile = () => {
  const [session] = useSession();

  return (
    <Box>
      <div>
        <div className="h-16 w-full bg-blue-500"></div>
        <div className="relative w-20 h-20 bg-red-300 flex items-center justify-center rounded-full border-2 border-white -mt-10 mx-auto overflow-hidden">
          {session?.user?.image ? (
            <img src={session?.user?.image} alt="profile-picture" />
          ) : (
            <div className="font-bold text-lg">
              <span>{session?.user?.name?.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="flex justify-center flex-col items-center py-2 gap-2">
          <h1 className="font-bold">{session?.user?.name}</h1>
          <span
            className="text-sm text-blue-400 cursor-pointer"
            onClick={() => signOut()}
          >
            Sign Out
          </span>
        </div>
      </div>
      <div className="hidden md:flex items-start justify-between px-4 border-t py-2">
        <div className="text-sm">
          <p className="text-gray-500">Connections</p>
          <p>Grow your network</p>
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
