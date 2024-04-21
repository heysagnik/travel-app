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
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // all false and default values are added to make the fields optional (below)
  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },
  status: {
    type: String,
    required: false,
    default: "inactive",
    enum: ["active", "inactive", "pending"], // in a trip, not in a trip, pending approval for a trip
  },
  notifications: {
    type: [mongoose.Schema.Types.ObjectId], //---testing something--- might change to an array
    ref: "User",
    required: false,
    default: [], // should contain usernames and ids of users who have requested to join a trip
  },
  posts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Post",
    required: false,
    default: [], // should contain ids of posts created by the user
  },
});

const User = mongoose.model("User", userModel);

export default User;

// here posts mean the trips created by the user
