import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import shuffle from "lodash/shuffle";
import Image from "next/image";
const Header = ({ playlist }) => {
  const [color, setColor] = useState(null);
  useEffect(() => {
    const colors = [
      "from-indigo-500",
      "from-blue-500",
      "from-green-500",
      "from-yellow-500",
      "from-orange-500",
      "from-red-500",
      "from-purple-500",
      "from-pink-500",
    ];
    setColor(shuffle(colors).pop());
  }, [playlist]);
  return (
    <>
      <Profile />
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 `}
      >
        <div className="relative h-12 w-12 shadow-2xl">
          {playlist?.image ? (
            <Image
              src={playlist?.image?.[0]?.url}
              key={playlist?.id}
              alt="playlist icon"
            />
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default Header;
