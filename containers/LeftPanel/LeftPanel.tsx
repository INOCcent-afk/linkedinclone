import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LeftPanel: FC<Props> = ({ children }: Props) => {
  return (
    <div className="left-panel-width hidden md:flex flex-col gap-2 sticky top-20 h-10">
      {children}
    </div>
  );
};

export default LeftPanel;
