import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState([
    {
      name: "Buy Milk",
      date: "hello",
    },
    {
      name: "Go to College",
      date: "20/10/2024",
    },
    {
      name: "aayush",
      date: "30/3/2020",
    },
  ]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newTodoItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newTodoItem];
      setTodoItems(newItems);
    }
  };

  // const todoItems = [

  //   {
  //     name: "Buy Milk",
  //     date: "hello",
  //   },
  //   {
  //     name: "Go to College",
  //     date: "20/10/2024",
  //   },
  //   {
  //     name: "aayush",
  //     date: "30/3/2020",
  //   },
  // ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleKeyDown={onKeyDown}></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
