import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Modal from "./Modal";
import DetailsModal from "./DetailsSentModal";

const RootLayout = () => {
  return (
    <div className="lg:w-[1200px] w-full min-h-screen mx-auto lg:flex">
      <Navigation />
      <Outlet />
      <Modal />
      <DetailsModal />
    </div>
  );
};

export default RootLayout;
