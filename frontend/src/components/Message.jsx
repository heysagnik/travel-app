import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../LoginContext";
function Message() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(LoginContext);
  if (!isAuthenticated) {
    navigate("/login");
  }
  return (
    <div>
      <h1>Message</h1>
    </div>
  );
}

export default Message;
