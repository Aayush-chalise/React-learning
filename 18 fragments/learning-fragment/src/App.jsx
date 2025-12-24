import "./App.css";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
// import ErrorMsg from "./components/ErrorMsg";
function App() {
  let [foodItems, setFoodItems] = useState(["Rice", "Burger"]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>

        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>Above given are the list of healthy food.</p>
      </Container>
    </>
  );
}

export default App;
