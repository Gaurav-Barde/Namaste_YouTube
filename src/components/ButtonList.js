import React from "react";
import Button from "./Button";

const buttonNameList = [
  "All",
  "Live",
  "Cricket",
  "Football",
  "UFC",
  "Big Boss",
  "Shark Tank",
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {buttonNameList.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
