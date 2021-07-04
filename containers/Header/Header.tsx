import React from "react";

import Image from "next/image";

import Logo from "../../assets/linkedin.svg";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import HeaderTabButton from "../HeadeTabButton";

const Header = () => {
  return (
    <header className="px-4 py-5 flex items-center justify-between">
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
  );
};

export default Header;
