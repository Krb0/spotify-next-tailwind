import React from "react";
import { HomeIcon, SearchIcon, LibraryIcon } from "@heroicons/react/outline";
const MainButtons = () => {
  return (
    <>
      <button className="flex items-center space-x-2 font-medium hover:text-white">
        <HomeIcon className="h-5 w-5" />
        <p>Home</p>
      </button>
      <button className="flex items-center space-x-2 font-medium hover:text-white">
        <SearchIcon className="h-5 w-5" />
        <p>Search</p>
      </button>
      <button className="flex items-center space-x-2 font-medium hover:text-white">
        <LibraryIcon className="h-5 w-5" />
        <p>Your Library</p>
      </button>
    </>
  );
};

export default MainButtons;
