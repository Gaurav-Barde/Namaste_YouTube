import React, { createRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { toggleMenu } from "../utils/redux/menuSlice";
import { cacheSuggestion } from "../utils/redux/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputRef = createRef();

  const cachedSuggestions = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedSuggestions[searchQuery]) {
        setSearchSuggestions(cachedSuggestions[searchQuery]);
      } else {
        getSearchResults();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(cacheSuggestion({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => dispatch(toggleMenu());

  const displaySearchResults = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="grid grid-flow-col p-5 items-center">
      <div className="flex col-span-1">
        <img
          className="h-8 mr-2 cursor-pointer"
          alt="menu"
          src="https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png"
          onClick={toggleMenuHandler}
        />
        <Link to="/">
          <img
            className="h-7"
            alt="YouTube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </Link>
      </div>
      <div className="col-span-10 place-self-center">
        <input
          type="text"
          ref={inputRef}
          placeholder="Search"
          className="w-96 border border-gray-600 rounded-l-full py-2.5 px-3 text-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          // onBlur={() => setShowSuggestions(false)}
        />
        {/* MODAL */}
        {showSuggestions && (
          <div className="absolute w-96 h-60 m-1 z-10 bg-slate-50 rounded-md overflow-y-scroll">
            <ul>
              {searchSuggestions.map((suggestion, index) => (
                <Link
                  to={"results?search_query=" + suggestion}
                  key={index}
                  onClick={() => displaySearchResults(suggestion)}
                >
                  <li className="my-2 first:my-0 flex items-center p-2 hover:bg-slate-100 cursor-pointer">
                    <img
                      alt="search-suggestion"
                      src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                      className="w-4 h-4 mr-2"
                    />
                    {suggestion}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
        {/* MODAL */}

        <button className="border border-gray-800 bg-gray-300 rounded-r-full p-4">
          <img
            className="w-3"
            alt="searh"
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
          />
        </button>
      </div>
      <div className="col-span-1 justify-self-end">
        <img
          className="h-10"
          alt="user"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
      </div>
    </div>
  );
};

export default Header;
