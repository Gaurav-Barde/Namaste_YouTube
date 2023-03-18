import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/redux/chatSlice";

const ChatInputBox = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();

  const sendChatMessage = () => {
    chatMessage &&
      dispatch(
        addMessage({
          name: "Gaurav Barde",
          message: chatMessage,
        })
      );
    setChatMessage("");
  };

  return (
    <div className="absolute bottom-0 w-full h-24 p-2 bg-slate-200">
      <div className="flex">
        <img
          className="h-8"
          alt="user"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
        <span className="m-2 mr-3 font-bold">Gaurav Barde</span>
      </div>
      <div className="flex items-center">
        <input
          className="border-b border-black w-1/2 p-1"
          type="text"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
        />
        <button onClick={sendChatMessage}>
          <img
            src="https://static.thenounproject.com/png/1887603-200.png"
            className="h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default ChatInputBox;
