import React from "react";
import { createBrowserRouter, useNavigate, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import tweets from "./examples/tweets";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Redirect to="/discover" /> },
      { path: "/discover", element: <Feed /> },
      { path: "/message", element: <Message /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;