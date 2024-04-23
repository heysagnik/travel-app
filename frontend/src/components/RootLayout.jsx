import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from "./Navigation";
import Modal from "./Modal";
import DetailsModal from "./DetailsSentModal";
import { Circle } from 'iconoir-react';



const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:w-[1200px] w-full min-h-screen mx-auto lg:flex">
      <Navigation />
      {isLoading ? (
        <div className="flex justify-center items-center">
        <Circle className="animate-spin h-32 w-32 text-purple-500" />
      </div>
      ) : (
        <Outlet />
      )}
      <Modal />
      <DetailsModal />
    </div>
  );
};

export default RootLayout;