import React from "react";

import Image from "next/image";

import Logo from "../../assets/linkedin.svg";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import HeaderTabButton from "../HeadeTabButton";

const Header = () => {
  return (
    <div className="bg-white fixed top-0 w-full z-50">
      <header className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="">
          <Image width="35px" height="35px" src={Logo} alt="logo_branding" />
        </div>
        <nav className="hidden md:block">
          <HeaderTabButton />
        </nav>
        <div className="md:hidden">
          <DotsHorizontalIcon className="w-8" />
        </div>
      </header>
    </div>
  );
};

export default Header;
