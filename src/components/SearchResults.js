import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchQuery);
    const json = await data.json();
    setSearchResults(json.items);
  };

  return (
    <div className="mt-5 flex flex-wrap">
      {searchResults.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
