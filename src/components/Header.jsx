import React from "react";
import { logoChurch } from "../assets/assets";

const Header = () => {
  return (
    <header className="w-full  justify-center items-center bg-tertiary">
      <div className="flex justify-center items-center">
        <img src={logoChurch} alt="" className="h-48" />
      </div>
    </header>
  );
};

export default Header;
