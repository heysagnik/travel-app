import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import RightBar from "./RightBar";
import Modal from "./Modal";

const RootLayout = () => {
  return (
    <div className="lg:w-[1200px] w-full min-h-screen mx-auto lg:flex">
      <Navigation />
      <Outlet />
      <Modal />
    </div>
  );
};

export default RootLayout;
