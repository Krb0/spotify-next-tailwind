import React from "react";
import MainButtons from "./MainButtons";
import SecondaryButtons from "./SecondaryButtons";

const Buttons = () => {
  return (
    <div className="space-y-4">
      <MainButtons />
      <hr className="border-t-[0.1px] border-gray-900" />
      <SecondaryButtons />
      <hr className="border-t-[0.1px] border-gray-900" />
    </div>
  );
};

export default Buttons;
