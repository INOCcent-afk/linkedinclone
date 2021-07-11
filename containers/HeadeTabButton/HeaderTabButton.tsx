import React from "react";
import TabButton from "../../components/TabButton";
import Link from "next/link";

import {
  BellIcon,
  BriefcaseIcon,
  ChatIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

const HeaderTabButton = () => {
  return (
    <ul className="md:flex gap-8">
      <Link href="/potangina">
        <div>
          <TabButton Icon={<HomeIcon />} Desc="Home" />
        </div>
      </Link>
      <Link href="/">
        <div>
          <TabButton Icon={<UserGroupIcon />} Desc="My Network" />
        </div>
      </Link>
      <Link href="/">
        <div>
          <TabButton Icon={<BriefcaseIcon />} Desc="Jobs" />
        </div>
      </Link>
      <Link href="/">
        <div>
          <TabButton Icon={<ChatIcon />} Desc="Messaging" />
        </div>
      </Link>
      <Link href="/">
        <div>
          <TabButton Icon={<BellIcon />} Desc="Notifications" />
        </div>
      </Link>
    </ul>
  );
};

export default HeaderTabButton;
