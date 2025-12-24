import styles from "./Item.module.css";
// 4
// styles is a parent object.
// This component is about single list item. It executes every time FoodItems component calls it .
const Item = ({ food, bought, handleBuyButton }) => {
  // here food is a key of props object which contains single item of the array.

  return (
    <li
      className={`${styles["ac-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["ac-span"]}>{food}</span>
      <button
        className={`${styles.btn} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
