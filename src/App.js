import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/todo")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setTodos(data);
      });
  }, []);

  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-container">
      <h1>TO DO LIST</h1>
      <h2>You have spend {timer} seconds on todolist application</h2>

      <TodoList arrayList={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
