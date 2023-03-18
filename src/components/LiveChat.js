import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateMessage, generateName } from "../utils/helper";
import { addMessage } from "../utils/redux/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateMessage() + " 🚀",
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-y-scroll h-full flex flex-col-reverse">
      {chatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
