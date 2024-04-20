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
import { Provider } from "./LoginContext";

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
    userName: "John Doe",
    userPhoto: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc at lacus tincidunt vehicula.",
  },
  {
    id: 2,
    userName: "Jane Doe",
    userPhoto: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc at lacus tincidunt vehicula.",
  },
  {
    id: 3,
    userName: "John Doe",
    userPhoto: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc at lacus tincidunt vehicula.",
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
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.post("/api/verifyToken", { token });
          if (response.data.valid) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            localStorage.removeItem("token"); // Remove invalid token
          }
        }
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <>
      <Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
