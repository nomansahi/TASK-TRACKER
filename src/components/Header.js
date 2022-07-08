import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className=" ">
      <div className="flex justify-center justify-between p-8 mt-4">
        <h1 className="text-blue-700 text-2xl font-bold uppercase">{title}</h1>
        <Button onClick={onAdd} showAdd={showAdd} />
      </div>
    </div>
  );
};

export default Header;

Header.defaultProps = {
  title: "Task Tracker",
};
