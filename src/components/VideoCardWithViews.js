import React from "react";
import VideoCard from "./VideoCard";

export const VideoCardWithViews = ({ info }) => {
  const { statistics } = info;
  const { viewCount } = statistics;
  return (
    <div>
      <VideoCard info={info}>
        <p className="text-sm">{viewCount} views</p>
      </VideoCard>
    </div>
  );
};
