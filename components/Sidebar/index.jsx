import React from "react";
import Buttons from "./Buttons";
import Playlist from "./Playlist";

const Sidebar = () => {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide space-y-4 min-w-auto sm:min-w-[225px] ">
      <Buttons />
      <Playlist />
    </div>
  );
};

export default Sidebar;
