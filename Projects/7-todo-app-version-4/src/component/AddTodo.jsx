import styles from "./AddTodo.module.css";
import { useState } from "react";
const AddTodo = ({ handleInput }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddBtnClicked = () => {
    handleInput(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row  kg-row">
        <div className="col-6">
          <input
            value={todoName}
            onChange={handleNameChange}
            className={styles.inputTask}
            type="text"
            placeholder="Enter Tasks"
          ></input>
        </div>
        <div className="col-4">
          <input
            value={todoDate}
            onChange={handleDateChange}
            className={styles.inputTask}
            type="date"
          ></input>
        </div>
        <div className="col-2">
          <button
            className="my-btn btn  btn-success"
            onClick={handleAddBtnClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
