import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="auth flex-center">{children}</main>;
};

export default Layout;
