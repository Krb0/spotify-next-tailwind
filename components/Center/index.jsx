import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Logo from "../../assets/user.png";
import { ChevronDownIcon } from "@heroicons/react/outline";
import shuffle from "lodash/shuffle";

const Center = () => {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
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
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);
  return (
    <div className="flex-grow text-white">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 text-white opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <div className="h-10 w-10 relative rounded-full">
            <Image
              className="rounded-full"
              src={session?.user.image ? session?.user.image : Logo}
              alt="profile icon"
              layout="fill"
            />
          </div>
          <h2>{session?.user.name ? session?.user.name : "..."} </h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 `}
      ></section>
    </div>
  );
};

export default Center;
