import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const SignUp = () => {
  // name, username, email, password, contact, address;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");

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
        {
          withCredentials: true,
        }
      );
      console.log("register successful:", response.data);
    } catch (error) {
      console.error("register failed:", error);
    }
  };
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="contact"
        placeholder="Contact"
        onChange={(e) => setContact(e.target.value)}
      />
      <input
        type="address"
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Register</button>
    </div>
  );
};

export default SignUp;
