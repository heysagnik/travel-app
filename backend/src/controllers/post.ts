import { Request, Response } from "express";

import Post from "../models/post";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({ status: "active" })
      .populate("author", "username status name")
      .sort({ createdAt: -1 })
      .limit(30)
      .exec();
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, category } = req.body;
    const { id, username } = req.body.user;

    const newPost = { title, content, category, author: id };

    const registeredPost = await Post.create(newPost);
    res.status(200).json({
      message: "Successfully created a new post",
      data: registeredPost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, content, category, tags } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title,
        content,
        category,
        tags,
      },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({
      message: "Successfully updated the post",
      data: updatedPost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletePost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Successfully deleted the post" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
