import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../recoil/authState";

import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const auth = useRecoilValue(authState);

  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/profile/${auth._id}`,
        {
          withCredentials: true,
        }
      );
      setProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth === null || auth === undefined) {
      navigate("/login");
    } else {
      getProfile();
    }
  }, []);

  return (
    <div className="lg:w-[640px] w-full h-full pb-20  pt-1 overflow-auto">
      <h3 className=" text-3xl ">Profile</h3>
      <p className="pt-10">Username: @{auth.username}</p>
      {profile === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p className="pt-3">Name: {profile.user.name}</p>
          <p className="pt-3">
            Number of posts made on TravelMate: {profile.posts.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile;
