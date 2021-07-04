import React, { FC, ReactNode } from "react";
import Header from "../../containers/Header";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <footer></footer>
    </div>
  );
};

export default Layout;
