import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center border-b border-b-slate-200 p-3">
      <img
        className="h-10"
        alt="user"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      />
      <span className="m-2 mr-3 font-bold text-lg">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
