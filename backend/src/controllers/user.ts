import { Request, Response } from "express";
import User from "../models/user";
import Post from "../models/post";

import { sendSMS } from "../utils/twilio";

export const getProfile = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const posts = await Post.find({ author: id });
    res.status(200).json({ user, posts });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const closePost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userId = req.body.user.id;
    const post = await Post.findById(id).populate("author", "id").exec();
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.author.id !== userId) {
      return res.status(403).json({ message: "Forbidden" });
    }
    post.status = "inactive";
    await post.save();

    // send notification to all interested users

    res.status(200).json({ message: "Post closed successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const interestedInAPost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userId = req.body.user.id;
    const post = await Post.findById(id)
      .populate("author", "id")
      .populate("interestedUsers", "id contact")
      .exec();
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.author.id === userId) {
      return res.status(403).json({ message: "Forbidden" });
    }
    if (post.status === "inactive") {
      return res.status(400).json({ message: "Post is closed" });
    }
    if (post.interestedUsers.includes(userId)) {
      return res
        .status(400)
        .json({ message: "Already interested in the post" });
    }
    post.interestedUsers.push(userId);
    if (post.limit && post.interestedUsers.length === post.limit) {
      post.status = "inactive";
    }
    await post.save();

    for (const user of post.interestedUsers) {
      // send notification to all interested users
      // @ts-ignore
      if (user.contact) {
        sendSMS(
          // @ts-ignore
          user.contact,
          `Someone is interested in your post: ${post.title}`
        );
      }
    }

    // send notification to the author of the post

    res.status(200).json({ message: "Interested in the post" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
