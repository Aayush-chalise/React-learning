import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import { useReducer } from "react";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.todoName,
        date: action.payload.todoDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.todoName
    );
  }

  return newTodoItems;
};

const App = () => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const handleInput = (todoName, todoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDeleteItems = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <center className="todo-Container">
      <AppName></AppName>
      <AddTodo handleInput={handleInput}></AddTodo>{" "}
      {/*passing function via props(child invokes it)*/}
      <TodoItems
        onDeleteClick={handleDeleteItems}
        todoItems={todoItems}
      ></TodoItems>
    </center>
  );
};
export default App;
