import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import LoginHero from "../components/ui/LoginHero";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { authState } from "../recoil/authState";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [isLoggedInState, setIsLoggedInState] = useRecoilState(authState);

  const handleLogin = async () => {
    try {
      console.log("Logging in");
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Login successful:", response.data);

      if (response.status === 200) {
        setIsLoggedInState({
          username: response.data.data.username,
          email: response.data.data.email,
        });
        console.log(isLoggedInState);

        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col lg:items-center lg:justify-center h-full lg:h-[calc(100vh-60px)]">
      <div className="flex lg:justify-around justify-center items-center w-full">
        <LoginHero />
        <div className="lg:w-1/3 w-full flex flex-col justify-center">
          <div className="w-full flex flex-col justify-center">
            <div className="max-w-[380px] w-full mx-auto border-gray-gray2 px-6 py-10 rounded-lg flex flex-col justify-center lg:border ">
              <h3 className="text-40 font-normal font-instrument text-primary text-center">
                Log <i>in</i>
              </h3>

              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                >
                  <input
                    className="border border-gray-gray9 rounded-md text-base h-10 px-4 bg-gray-gray9 text-black w-full mt-6"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setusername(e.target.value)}
                  />
                  <input
                    className="border border-gray-gray9 rounded-md text-base h-10 px-4 bg-gray-gray9 text-black w-full mt-6"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="bg-black text-white text-base h-10 rounded-3xl w-full mt-6">
                    Login
                  </button>
                </form>
              </div>
            </div>
            <p className="text-light font-normal text-sm mt-0 lg:mt-10 text-center">
              Don’t have a profile?{" "}
              <a
                className="text-gray-gray5 hover:text-primary hover:underline font-semibold transition-all ease-in-out"
                href="/signup"
              >
                Join <i>Travel</i>Mate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
