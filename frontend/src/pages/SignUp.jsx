import React from "react";
import axios from "axios";
import LoginHero from "../components/ui/LoginHero";
import { useState, useEffect } from "react";
import { authState } from "../recoil/authState";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // name, username, email, password, contact, address;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("+91");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          email,
          password,
          name,
          contact,
          address,
          username,
        },
        {},
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data.data));
      setAuth(response.data.data);
      console.log("register successful:", response.data);

      navigate("/");
    } catch (error) {
      console.error("register failed:", error);
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
                Sign <i>Up</i>
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
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="border border-gray-gray9 rounded-md text-base h-10 px-4 bg-gray-gray9 text-black w-full mt-6"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="border border-gray-gray9 rounded-md text-base h-10 px-4 bg-gray-gray9 text-black w-full mt-6"
                    type="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="border border-gray-gray9 rounded-md text-base h-10 px-4 bg-gray-gray9 text-black w-full mt-6"
                    type="contact"
                    placeholder="Contact"
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <input
                    className="border border-gray-gray9 rounded-md text-base h-10 px-4 bg-gray-gray9 text-black w-full mt-6"
                    type="address"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    className="border border-gray-gray9 rounded-md text-base h-10 px-4 bg-gray-gray9 text-black w-full mt-6"
                    type="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <button
                    className="bg-black text-white text-base h-10 rounded-3xl w-full mt-6"
                    // onClick={handleLogin}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
            <p className="text-light font-normal text-sm mt-0 lg:mt-10 text-center">
              Already have a profile?{" "}
              <a
                className="text-gray-gray5 hover:text-primary hover:underline font-semibold transition-all ease-in-out"
                href="/login"
              >
                Login to your account{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
