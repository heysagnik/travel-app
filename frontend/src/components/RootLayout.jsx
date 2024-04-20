import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Feed from "./Feed";

const RootLayout = () => {
  return (
    <div className="flex lg:flex-row lg:justify-center lg:items-center">
      <Navigation />
  
      <Outlet />
    </div>
  );
};

export default RootLayout;
