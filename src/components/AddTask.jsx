import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add text");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="m-2 p-4" onSubmit={onSubmit}>
      <div className="flex flex-col">
        <label className="text-black font-bold">Add Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 border-black p-2 mt-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-black font-bold mt-2">Add Day & Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add Day & Time"
          className="border-2 border-black p-2 mt-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-black font-bold mt-2">Add Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        type="submit"
        value="save task"
        className="bg-blue-500 text-white font-bold py-1 px-2 mt-2 uppercase rounded-lg block w-full"
      />
    </form>
  );
};

export default AddTask;
