import { useAuthContext } from "../../context/AuthContext";

import { extractTime } from "../../utils/extractTIme";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();

  const messageFromMe = authUser._id === message.senderId;
  const chatClassName = messageFromMe ? `chat-end` : "chat-start";
  const formatedTime = extractTime(message.createdAt);
  const bubbleBgColor = messageFromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer text-gray-500 opacity-70 text-xs flex gap-1 items-center ">
        {formatedTime}
      </div>
    </div>
  );
};
export default Message;
