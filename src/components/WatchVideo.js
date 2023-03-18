import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/redux/menuSlice";
import ChatInputBox from "./ChatInputBox";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [videoData, setVideoData] = useState([]);
  const [params] = useSearchParams();
  const videoId = params.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideoData(videoId);
  }, []);

  const getVideoData = async (videoId) => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        videoId +
        "&key=AIzaSyAc1M0jU1Xf6UcXtoxdpUI-HGXCnTc90pw"
    );
    const json = await data.json();
    setVideoData(json.items);
  };

  return (
    <div className="p-4 w-full">
      <div className="flex">
        <div>
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-[600px] bg-slate-50 border-2 border-slate-300 relative">
          <h1 className="text-center font-bold text-xl p-4 text-red-500 absolute top-0 w-full bg-inherit">
            Live Chat
          </h1>
          <LiveChat />
          <ChatInputBox />
        </div>
      </div>
      {videoData.length ? (
        <>
          <p className="my-2 text-xl font-bold">
            {videoData[0]?.snippet.title}
          </p>
          <p className="my-2 text-md font-bold">
            {videoData[0]?.snippet.channelTitle}
          </p>
        </>
      ) : null}
      <CommentsContainer />
    </div>
  );
};

export default WatchVideo;
