import { ArrowLeftIcon } from "@heroicons/react/outline";
import { signOut } from "next-auth/react";
import React from "react";
import MainButtons from "./MainButtons/MainButtons";
import SecondaryButtons from "./SecondaryButtons/SecondaryButtons";

const Buttons = () => {
  return (
    <div className="space-y-4">
      <button
        className="flex  items-center space-x-2 font-medium hover:text-white"
        onClick={() => signOut()}
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <p>Log Out</p>
      </button>
      <MainButtons />
      <hr className="border-t-[0.1px] border-gray-900" />
      <SecondaryButtons />
      <hr className="border-t-[0.1px] border-gray-900" />
    </div>
  );
};

export default Buttons;
