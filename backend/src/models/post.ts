import e from "express";
import mongoose from "mongoose";

const postModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
    enum: ["beach", "mountain", "city", "countryside", "other"],
  },
  tags: {
    type: Array,
    required: false,
    default: [],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  interestedUsers: {
    type: Array,
    required: false,
    default: [],
  },
  comments: {
    type: Array,
    required: false,
    default: [],
  },
  // AUTHOR
  // COMMENTS
});

const Post = mongoose.model("Post", postModel);

export default Post;
