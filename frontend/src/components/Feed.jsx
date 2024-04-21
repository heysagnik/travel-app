import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart as HeartIcon,
  ChatBubbleEmpty as ChatIcon,
  UserBadgeCheck as UserIcon,
} from "iconoir-react";

import { useRecoilValue } from "recoil";
import { authState } from "../recoil/authState";
import axios from "axios";

import RightBar from "./RightBar";

const Feed = () => {
  // const [heartsFilled, setHeartsFilled] = useState(tweets.map(() => false));
  const auth = useRecoilValue(authState);
  const navigate = useNavigate();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    if (auth.username) {
      const fetchTweets = async () => {
        const response = await axios.get("http://localhost:3000/api/posts", {
          withCredentials: true,
        });
        console.log(response.data);
        setTweets(response.data);
      };
      fetchTweets();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="lg:flex ">
      <div className="lg:w-[640px] w-full h-full pb-20  pt-14">
        {tweets.map((tweet, index) => (
          <article
            key={tweet._id}
            className="bg-white px-4 mob:px-6 py-4 border-b border-grey hover:bg-gray-gray0 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <img
                src={tweet.userPhoto}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-semibold">{tweet.author.name}</p>
                <p className="text-gray-500 text-sm">
                  @{tweet.author.username}
                </p>
              </div>
            </div>
            <p className="mt-2 text-gray-700">{tweet.title}</p>
            <p className="mt-2 text-gray-700">{tweet.content}</p>
            <div className="mt-2 flex space-x-4">
              <button
                onClick={() => {
                  // setHeartsFilled((prevHeartsFilled) => {
                  //   const newHeartsFilled = [...prevHeartsFilled];
                  //   newHeartsFilled[index] = !newHeartsFilled[index];
                  //   return newHeartsFilled;
                  // }
                  // const userId = auth._id;
                  // const tweetId = tweet._id;
                  // console.log(tweetId);
                  // const resp = await axios.post(
                  //   `http://localhost:3000/api/users/interested/${tweetId}`,
                  //   {},
                  //   { withCredentials: true }
                  // );
                  // console.log(resp.data);

                  document.getElementById("details_sent_modal").showModal();
                }}
              >
                <HeartIcon
                  className="h-5 w-5"
                  // fill={heartsFilled[index] ? "#FE5401" : "none"}
                />
              </button>

              <button className="text-gray-500">
                <ChatIcon className="h-5 w-5" />
              </button>
              <button className="text-gray-500 ">
                <UserIcon className="h-5 w-5" />
              </button>
            </div>
          </article>
        ))}
      </div>
      <RightBar />
    </div>
  );
};

export default Feed;
