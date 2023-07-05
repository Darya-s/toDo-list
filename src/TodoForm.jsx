import React, { useState, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [deadline, setDdl] = useState(props.edit ? props.edit.deadline : "");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChangeDdl = (e) => {
    setDdl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      description: input,
      deadline_time: deadline,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update description"
            value={input}
            name="ddl"
            className="todo-input edit"
            onChange={handleChange}
          />
          <input
            type="date"
            value={deadline}
            name="deadline"
            className="todo-input edit"
            onChange={handleChangeDdl}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Description"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <input
            type="date"
            value={deadline}
            name="deadline"
            className="todo-input edit"
            onChange={handleChangeDdl}
          />

          <button className="todo-button ">Add to do</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
