import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/menuSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <div className="grid grid-flow-col p-5">
      <div className="flex col-span-1">
        <img
          className="h-8 mr-4 cursor-pointer"
          alt="menu"
          src="https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            className="h-8"
            alt="YouTube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 place-self-center">
        <input
          type="text"
          placeholder="Search"
          className="w-96 border border-gray-600 rounded-l-full p-2.5"
        />
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
