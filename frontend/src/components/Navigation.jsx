import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeSimpleDoor as Home, ChatBubbleEmpty as Chat,UserCircle as User } from 'iconoir-react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "font-bold" : "";
  }

  return (
    <nav className="lg:w-[212px] fixed lg:h-screen lg:top-0 lg:left-0 bottom-0 w-full lg:static bg-white border-r border-grey z-20 lg:overflow-y-auto ">
      <ul className="flex flex-row space-x-20 justify-center items-center lg:items-start lg:flex-col lg:space-y-4 lg:space-x-0 lg:px-6 py-3 lg:py-6">
        <li>
          <NavLink to="/discover" className={`flex flex-row space-x-3 py-1 lg:py-2 px-3 lg:px-6 rounded ${getNavLinkClass("/discover")}`}>
            <Home /><span className="hidden lg:block">Discover</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/message" className={`flex flex-row space-x-3 py-1 lg:py-2 px-3 lg:px-6 rounded ${getNavLinkClass("/message")}`}>
            <Chat/><span className="hidden lg:block">Messages</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={`flex flex-row space-x-3 py-1 lg:py-2 px-3 lg:px-6 rounded ${getNavLinkClass("/profile")}`}>
            <User/><span className="hidden lg:block">Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;