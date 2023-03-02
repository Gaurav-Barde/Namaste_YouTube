import React from "react";

const VideoCard = ({ info }) => {
  const viewCount = info?.statistics?.viewCount;
  const thumbnails = info?.snippet.thumbnails;
  const title = info?.snippet.title;
  const channelTitle = info?.snippet.channelTitle;

  return (
    <div className="p-2 m-4 w-72">
      <img alt="thumbnail" src={thumbnails.medium.url} />
      <p className="my-1 text-sm">{title}</p>
      <p className="text-sm font-bold">{channelTitle}</p>
      <p className="text-sm">{viewCount} views</p>
    </div>
  );
};

export default VideoCard;
