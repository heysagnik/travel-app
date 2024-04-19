import e from "express";
import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // all false and default values are added to make the fields optional
  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },
  status: {
    type: String,
    required: false,
    default: "inactive",
    enum: ["active", "inactive", "pending"],
  },
  notifications: {
    type: Array,
    required: false,
    default: [],
  },
  posts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Post",
    required: false,
    default: [],
  },
  // POSTS
  // PREVIOUS TRIPS
});

const User = mongoose.model("User", userModel);

export default User;
