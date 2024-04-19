import express, { Request, Response } from "express";

import User from "../models/user";
import Post from "../models/post";
import { login, logout, register } from "../controllers/auth";

export const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);
