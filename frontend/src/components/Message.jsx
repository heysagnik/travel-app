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
    <div>
      <h1>Message</h1>
    </div>
  );
}

export default Message;
