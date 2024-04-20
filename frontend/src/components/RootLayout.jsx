import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import RightBar from "./RightBar";

const RootLayout = () => {
  return (
    <div className="lg:w-[1200px] w-full min-h-screen mx-auto lg:flex">
      <Navigation />
      <Outlet />
      
    </div>
  );
};

export default RootLayout;
