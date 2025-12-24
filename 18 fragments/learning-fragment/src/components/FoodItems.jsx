import Item from "./Item";
import { useState } from "react";
// 3
// This component maps around the fooditems array and calls the item component.
const FoodItems = ({ items }) => {
  // here items is a key of props object and items contains the array of foodItems.

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (event, item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          food={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => {
            onBuyButton(event, item);
          }}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
