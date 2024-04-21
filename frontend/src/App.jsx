import React, { useEffect } from "react";
import {
  createBrowserRouter,
  useNavigate,
  RouterProvider,
} from "react-router-dom";
import Feed from "./components/Feed";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import RootLayout from "./components/RootLayout";
import Message from "./components/Message";
import Profile from "./components/Profile";
import axios from "axios";

import { RecoilRoot, useRecoilState } from "recoil";
import { authState } from "./recoil/authState";
import FinalScrn from "./pages/FinalScrn";

// eslint-disable-next-line react/prop-types
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
    userName: "A trip to Maldives",
    userPhoto: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Category: Beach. Limit: 1. Description: A week in Maldives. Who's interested? ---John Doe",
  },
  {
    id: 2,
    userName: "Kashmir trip",
    userPhoto: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Category: Hill station. Limit: 2. Description: Who's interested? ---Patel",
  },
  {
    id: 3,
    userName: "A trip to Goa",
    userPhoto: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Category: Beach. Limit: 1. Description: I want to go to Goa. Anyone up to accompany me? ---Anita",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Redirect to="/discover" /> },
      {
        path: "/discover",
        element: <Feed tweets={tweets} />,
      },
      { path: "/message", element: <Message /> },
      { path: "/profile", element: <Profile /> },
      { path: "/finalscrn", element: <FinalScrn /> },
      // { path: "/login", element: <Login /> },
      // { path: "/signup", element: <Signup /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  // const [isLoggedInState, setIsLoggedInState] = useRecoilState(authState);
  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:3000/api/auth/verifyToken",
  //         {},
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       if (response.data.message === "Token is valid") {
  //         setIsLoggedInState({
  //           username: response.data.data.username,
  //           email: response.data.data.email,
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error verifying token:", error);
  //     }
  //   };

  //   checkAuthentication();
  // }, []);

  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  );
}

export default App;
