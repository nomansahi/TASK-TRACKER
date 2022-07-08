import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className="bg-gray-200 text-black font-bold p-2 mt-4 mr-8"
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className="flex justify-between">
        {task.text}{" "}
        <FaTimes
          className="mt-2 text-red-400 cursor-pointer"
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
