import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../utils/redux/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getYouTubeVideos();
  }, []);

  const getYouTubeVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="mt-5 flex flex-wrap">
      {videos.map((video) => (
        <Link to={"watch?v="+video.id}>
        <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
