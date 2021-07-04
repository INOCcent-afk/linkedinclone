import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const RightPanel: FC<Props> = ({ children }: Props) => {
  return (
    <div className="right-panel-width hidden lg:flex flex-col gap-2 sticky top-20 h-10 w-full">
      {children}
    </div>
  );
};

export default RightPanel;
