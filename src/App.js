import React from "react";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";

//import MyTimer from "./MyTimer"
import "./App.css";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
    date: new Date(),
  },
  {
    id: 2,
    description: "Brush teeth",
    date: new Date(),
  },
  {
    id: 3,
    description: "Eat breakfast",
    date: new Date(),
  },
  {
    id: 4,
    description: "Eat lunch",
    date: new Date(),
  },
  {
    id: 5,
    description: "Eat dinner",
    date: new Date(),
  },
];
function App() {
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

      <TodoList arrayList={todos} />
    </div>
  );
}

export default App;
