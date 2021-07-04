import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Box: FC<Props> = ({ children }: Props) => {
  return (
    <div className="w-full rounded-md bg-white border border-gray-300 flex flex-col gap-2 justify-between">
      {children}
    </div>
  );
};

export default Box;
