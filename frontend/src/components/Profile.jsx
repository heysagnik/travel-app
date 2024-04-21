import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { authState} from "../recoil/authState";

function Profile() {
  const navigate = useNavigate();
  const auth = useRecoilValue(authState);
  
  useEffect(() => {
    if (auth === null || auth === undefined) {
      navigate("/login");
    } else {
      console.log("Profile mounted");
      console.log(auth);

    }});


  return (
    <div>
      <h1>Profile</h1>
      <p>{auth.username}</p>

    </div>
  );
}

export default Profile;