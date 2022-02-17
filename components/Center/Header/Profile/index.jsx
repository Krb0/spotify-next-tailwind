import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Logo from "../../../../assets/user.png";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="absolute top-5 right-8 ">
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
  );
};

export default Header;
