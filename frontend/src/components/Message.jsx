import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../recoil/authState";

function Message() {
  const navigate = useNavigate();
  const auth = useRecoilValue(authState);
  if (auth === null || auth === undefined) {
    navigate("/login");
  }
  return (
    <div className="lg:w-[640px] w-full h-full pb-20  pt-1 overflow-auto">
      <h1>Message</h1>
    </div>
  );
}

export default Message;
