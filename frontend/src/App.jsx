import React, { useEffect, Suspense, lazy } from "react";
import {
  createBrowserRouter,
  useNavigate,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import tweets from "./examples/tweets";

const Feed = lazy(() => import("./components/Feed"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/SignUp"));
const RootLayout = lazy(() => import("./components/RootLayout"));
const Message = lazy(() => import("./components/Message"));
const Profile = lazy(() => import("./components/Profile"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
