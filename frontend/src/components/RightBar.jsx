import LoginCard from "./ui/LoginCard";
import NewUsersCard from "./ui/NewUser";
import { useRecoilState, useRecoilValue } from "recoil";

import { authState } from "../recoil/authState";

const RightBar = () => {
  const auth = useRecoilValue(authState);
  return (
    <div className="max-w-348 h-full min-h-screen bg-white border-l border-r border-grey px-6 py-6 hidden md:block">
      {auth ? <NewUsersCard /> : <LoginCard />}
    </div>
  );
};

export default RightBar;
