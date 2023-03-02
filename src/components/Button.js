import React from "react";

const Button = ({ name }) => {
  return (
    <button className="cursor-pointer px-4 py-1 m-2 bg-gray-200 rounded-md text-sm">
      {name}
    </button>
  );
};

export default Button;
