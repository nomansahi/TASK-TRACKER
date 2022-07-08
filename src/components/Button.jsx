import React from "react";

const Button = ({ onClick, showAdd }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-700 text-white uppercase px-4 py-1 rounded-lg font-bold"
    >
      {showAdd ? "Close" : "Add"}
    </button>
  );
};

export default Button;
