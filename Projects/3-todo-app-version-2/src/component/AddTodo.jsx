import styles from "./AddTodo.module.css";

function AddTodo({ handleKeyDown }) {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={styles.in}
            type="text"
            placeholder="Enter Todo Here"
            onKeyDown={handleKeyDown}
          ></input>
        </div>
        <div className="col-4">
          {" "}
          <input className={styles.in} type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success my-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
