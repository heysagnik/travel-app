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
      default: [], // should contain usernames and ids of users who are interested in the post
    },
    comments: {
      // wont implement this feature as of now
      type: Array,
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postModel);

export default Post;
