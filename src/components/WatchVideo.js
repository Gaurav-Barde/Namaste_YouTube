import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/redux/menuSlice";

const WatchVideo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return <div>WatchVideo</div>;
};

export default WatchVideo;
