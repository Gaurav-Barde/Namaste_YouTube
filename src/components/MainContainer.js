import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex-1 bg-slate-50 mx-5 p-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
