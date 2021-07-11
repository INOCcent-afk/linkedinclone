import React, { FC, ReactNode } from "react";

type Props = {
  Icon: ReactNode;
  Desc: string;
};

const TabButton: FC<Props> = ({ Icon, Desc }: Props) => {
  return (
    <li className="flex flex-col items-center cursor-pointer">
      <div className="w-6">{Icon}</div>
      <div className="text-sm">{Desc}</div>
    </li>
  );
};

export default TabButton;
