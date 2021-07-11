import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CenterPanel: FC<Props> = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-between items-center w-full">
      {children}
    </div>
  );
};

export default CenterPanel;
