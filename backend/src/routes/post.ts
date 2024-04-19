import express from "express";
import multer from "multer";

import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/post";
import { validateUser } from "../middlewares/auth";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const router = express.Router();

router.get("/", validateUser, getPosts);

// router.post("/new", upload.single("image"), (req, res) => {});
router.post("/new", validateUser, createPost);

router.put("/:id", validateUser, updatePost); // not tested yet

router.delete("/:id", validateUser, deletePost);
