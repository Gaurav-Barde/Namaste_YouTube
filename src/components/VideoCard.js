import React from "react";

const VideoCard = ({ info, children }) => {
  const { snippet } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 m-4 w-72">
      <img alt="thumbnail" src={thumbnails.medium.url} />
      <p className="my-1 text-sm">{title}</p>
      <p className="text-sm font-bold">{channelTitle}</p>
      {children && children}
    </div>
  );
};

export default VideoCard;
