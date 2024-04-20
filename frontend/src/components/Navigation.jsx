import React from 'react';
import { Link } from 'react-router-dom';
import { HomeSimpleDoor as Home, ChatBubbleEmpty as Chat,UserCircle as User } from 'iconoir-react';

const Navigation = () => {
  
  return (
    <nav className="lg:w-64 fixed lg:h-screen lg:top-0 lg:left-0 bottom-0 w-full lg:static bg-white shadow z-20 lg:overflow-y-auto ">
    <ul className="flex flex-row space-x-20 justify-center items-center lg:items-start lg:flex-col lg:space-y-4 lg:space-x-0 lg:px-6 py-3 lg:py-6">
      <li>
        <Link to="/discover" className="flex flex-row space-x-3 py-1 lg:py-2 px-3 lg:px-6 rounded hover:bg-gray-200">
         <Home/><span className="hidden lg:block">Discover</span>
        </Link>
      </li>
      <li>
        <Link to="/message" className="flex flex-row space-x-3 py-1 lg:py-2 px-3 lg:px-6 rounded hover:bg-gray-200">
          <Chat/><span className="hidden lg:block">Messages</span>
        </Link>
      </li>
      <li>
        <Link to="/profile" className="flex flex-row space-x-3 py-1 lg:py-2 px-3 lg:px-6 rounded hover:bg-gray-200">
          <User/><span className="hidden lg:block">Profile</span>
        </Link>
      </li>
     
    </ul>
  </nav>
  );
};

export default Navigation;