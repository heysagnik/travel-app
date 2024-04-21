/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart as HeartIcon,
  ChatBubbleEmpty as ChatIcon,
  UserBadgeCheck as UserIcon,
} from "iconoir-react";

import { useRecoilValue } from "recoil";
import { authState } from "../recoil/authState";

import RightBar from "./RightBar";

// eslint-disable-next-line react/prop-types
const Feed = ({ tweets }) => {
  const navigate = useNavigate();

  const auth = useRecoilValue(authState);

  useEffect(() => {
    if (auth.username) {
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="lg:flex ">
      <div className="lg:w-[640px] w-full h-full pb-20  pt-14">
        {tweets.map((tweet) => (
          <article
            onClick={() => {
              document.getElementById("details_sent_modal").showModal();
            }}
            key={tweet.id}
            className="bg-white px-4 mob:px-6 py-4 border-b border-grey hover:bg-gray-gray0 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <img
                src={tweet.userPhoto}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-bold">{tweet.userName}</span>
            </div>
            <p className="mt-2 text-gray-700">{tweet.content}</p>
            <div className="mt-2 flex space-x-4">
              <button className="text-gray-500 hover:text-blue-500">
                <HeartIcon className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-blue-500">
                <ChatIcon className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-blue-500">
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
