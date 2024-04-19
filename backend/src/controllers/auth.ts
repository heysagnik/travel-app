import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/user";

dotenv.config();

const salt = bcrypt.genSaltSync(10);

export const register = async (req: Request, res: Response) => {
  try {
    const { name, username, email, password, contact, address } = req.body;
    const matchUsername = await User.findOne({ username });
    if (matchUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = {
      name,
      username,
      email,
      password: hashedPassword,
      contact,
      address,
    };

    const registeredUser = await User.create(newUser);

    const token = await jwt.sign(
      { id: registeredUser._id, username },
      process.env.JWT_SECRET as Secret
    );

    res.cookie("token", token);
    return res
      .status(201)
      .json({ message: "User registered successfully", data: registeredUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      username,
    });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const matchPassword = bcrypt.compareSync(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = await jwt.sign(
      { id: user._id, username },
      process.env.JWT_SECRET as Secret
    );

    res.cookie("token", token);
    res
      .status(200)
      .json({ message: "User logged in successfully", data: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.cookie("token", "");
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
