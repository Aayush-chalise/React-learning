import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currTodoItems) => [
      ...currTodoItems,
      { name: itemName, date: itemDueDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    // filter method deletes the false condition.
    setTodoItems((currtodoItemsVal) =>
      currtodoItemsVal.filter((item) => item.name !== todoItemName)
    );
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {/* here we are combining context value with state where todoItems is the state and addNewItem and deleteItem are the methods which changes the state  */}
      {/* as soon as the value of todoitems context.provider changes the UI will be repainted */}

      <center className="todo-container">
        <AppName />
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
