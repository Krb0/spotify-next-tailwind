import React from "react";
import { PlusCircleIcon, HeartIcon, RssIcon } from "@heroicons/react/outline";
const SecondaryButtons = () => {
  return (
    <>
      <button className="flex  items-center space-x-2 font-medium hover:text-white">
        <PlusCircleIcon className="h-5 w-5" />
        <p>Create Playlist</p>
      </button>
      <button className="flex  items-center space-x-2 font-medium hover:text-white">
        <HeartIcon className="h-5 w-5" />
        <p>Liked Songs</p>
      </button>
      <button className="flex  items-center space-x-2 font-medium hover:text-white">
        <RssIcon className="h-5 w-5" />
        <p>Your Episodes</p>
      </button>
    </>
  );
};

export default SecondaryButtons;
