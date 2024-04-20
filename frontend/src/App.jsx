import React,{ useEffect } from "react";
import { createBrowserRouter, useNavigate, RouterProvider } from "react-router-dom";
import Feed from "./components/Feed";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import RootLayout from "./components/RootLayout";
import Message from "./components/Message";
import Profile from "./components/Profile";


const Redirect = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  }, [navigate, to]);

  return null;
};


const tweets = [
  {
    id: 1,
    userName: "John Doe",
    userPhoto: "https://randomuser.me/api/portraits/women/65.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc at lacus tincidunt vehicula."
  },  
  {
    id: 2,
    userName: "Jane Doe",
    userPhoto: "https://randomuser.me/api/portraits/women/65.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc at lacus tincidunt vehicula."
   },
  {
    id: 3,
    userName: "John Doe",
    userPhoto: "https://randomuser.me/api/portraits/women/65.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc at lacus tincidunt vehicula."
  },
];


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Redirect to="/discover" /> },
      { path: "/discover", element: <Feed isAuthenticated={'true'} tweets={tweets}/> },
      { path: "/message", element: <Message /> },
      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
