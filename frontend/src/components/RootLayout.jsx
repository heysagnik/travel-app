import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from "./Navigation";
import Modal from "./Modal";
import DetailsModal from "./DetailsSentModal";
import Navbar from './Navbar';
import RightBar from './RightBar';



const RootLayout = () => {
  

  return (
    <div>
      {/* <Navbar /> */}
    <div className="lg:w-[1200px] w-full min-h-screen mx-auto lg:flex">
      
      <Navigation />
        <Outlet />
        <RightBar />
      
      <Modal />
      <DetailsModal />
    </div>
    </div>
  );
};

export default RootLayout;