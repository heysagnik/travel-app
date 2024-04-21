import LoginCard from "./ui/LoginCard";
import NewUsersCard from "./ui/NewUser";
import { useRecoilState } from "recoil";

import { authState } from "../recoil/authState";

const RightBar = () => {
  const [isLoggedInState] = useRecoilState(authState);
  return (
    <div className="max-w-348 h-full min-h-screen top-14 bg-white border-l border-grey px-6 py-6 hidden md:block">
      {isLoggedInState ? <NewUsersCard /> : <LoginCard />}
      {console.log(isLoggedInState)}
      {console.log("deff")}
    </div>
  );
};

export default RightBar;
