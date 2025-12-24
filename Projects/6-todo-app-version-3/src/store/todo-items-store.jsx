import { createContext } from "react";

export const TodoItemsContext = createContext([
  {
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
  },
]); // returns a context object. the context object itself doesnot hold any information.
