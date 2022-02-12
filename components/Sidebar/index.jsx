import React from "react";
import Buttons from "./Buttons";
import Playlist from "./Playlist";

const Sidebar = () => {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <Buttons />
      <Playlist> Holaaa</Playlist>
    </div>
  );
};

export default Sidebar;
