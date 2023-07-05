import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList({ arrayList, setTodos }) {
  const addTodo = async (todo) => {
    if (!todo.description || /^\s*$/.test(todo.description)) {
      return todo;
    }

    const added = await fetch("http://localhost:5000/api/todo", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(todo),
    });

    const data = await added.json();

    const newTodos = [...arrayList, data[0]];
    setTodos(newTodos);
  };

  const updateTodo = async (todoId, newValue) => {
    if (!newValue.description || /^\s*$/.test(newValue.description)) {
      return;
    }

    const update = await fetch(`http://localhost:5000/api/todo/${todoId}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newValue),
    });
    const data = await update.json();

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? data[0] : item))
    );
  };

  const removeTodo = async (id) => {
    await fetch(`http://localhost:5000/api/todo/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });

    const removeArr = [...arrayList].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = arrayList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />

      <TodoItem
        todos={arrayList}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}
