import styles from "./Foodinput.module.css";
// 2
// This creates a input field to enter food item. Event handling is done in this
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;
