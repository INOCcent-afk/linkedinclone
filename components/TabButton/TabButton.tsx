import React, { FC, ReactNode } from "react";

type Props = {
  Icon: ReactNode;
  Desc: string;
};

const TabButton: FC<Props> = ({ Icon, Desc }: Props) => {
  return (
    <li className="flex gap-2">
      <div className="">{Icon}</div>
      <div className="">{Desc}</div>
    </li>
  );
};

export default TabButton;
