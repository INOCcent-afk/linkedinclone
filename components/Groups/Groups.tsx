import React from "react";
import Box from "../Box";

const Groups = () => {
  return (
    <Box>
      <div className="pt-4">
        <p className="py-1 px-2 text-blue-400 text-sm hover:underline">
          Groups
        </p>
        <p className="py-1 px-2 text-blue-400 text-sm hover:underline">
          Events
        </p>
        <p className="py-1 px-2 text-blue-400 text-sm hover:underline">
          Followed Hashtags
        </p>
        <div className="mt-2 text-center border-t py-2 cursor-pointer hover:bg-gray-200">
          <h1>Discover More</h1>
        </div>
      </div>
    </Box>
  );
};

export default Groups;
