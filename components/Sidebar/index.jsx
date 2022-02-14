import { useSession } from "next-auth/react";
import React from "react";
import Buttons from "./Buttons";
import Playlist from "./Playlist";

const Sidebar = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide">
      <Buttons />
      <Playlist>Holaaa</Playlist>
    </div>
  );
};

export default Sidebar;
