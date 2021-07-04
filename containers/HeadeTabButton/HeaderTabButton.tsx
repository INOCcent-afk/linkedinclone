import React from "react";
import TabButton from "../../components/TabButton";
import Link from "next/link";

import { HomeIcon } from "@heroicons/react/solid";

const HeaderTabButton = () => {
  return (
    <ul className="md:flex">
      <Link href="/">
        <TabButton Icon={<HomeIcon />} Desc="Home" />
      </Link>
    </ul>
  );
};

export default HeaderTabButton;
