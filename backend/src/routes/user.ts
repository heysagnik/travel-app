import express from "express";
import {
  closePost,
  getProfile,
  getUsers,
  interestedInAPost,
} from "../controllers/user";

export const router = express.Router();

router.get("/", getUsers);

router.post("/interested/:tweetId", interestedInAPost);

router.post("/close/:id", closePost);

router.get("/profile/:id", getProfile);

// endpoints not tested yet
