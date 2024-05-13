import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth">
      <Sidebar />
      <MobileNav />
      <div className="root-container place-self-start">
        <div className="wrapper"> {children}</div>
      </div>
    </main>
  );
};

export default Layout;
