import React, { FC, ReactNode } from "react";
import Header from "../../containers/Header";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="mx-2 py-20 lg:py-24  flex justify-between gap-5 max-w-6xl xl:mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
