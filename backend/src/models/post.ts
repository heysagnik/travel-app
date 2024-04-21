import mongoose from "mongoose";

const postModel = new mongoose.Schema(
  {
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
      default: "other",
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
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      required: true,
      default: [], // should contain usernames and ids of users who are interested in the post
    },
    limit: {
      // if limit is set, only that many users can be interested in the post
      type: Number,
      required: false,
    },
    comments: {
      // wont implement this feature as of now
      type: Array,
      required: false,
      default: [],
    },
    status: {
      type: String,
      required: true,
      default: "active",
      enum: ["active", "inactive"], // active means post is visible to all, inactive means post is not visible to all
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postModel);

export default Post;
