import Counter from "./components/Counter";
import { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState(""); //store input into state
  const [items, setItems] = useState(["Jeans", "Shirt"]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const addItem = () => {
    setItems([...items, userInput]); // Add new item to the list
    setUserInput(""); // Clear the input field
  };

  return (
    <>
      <input
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter item name"
      />
      <button onClick={addItem}>Add Item</button>
      {items.map((item, index) => (
        <Counter key={index} itemName={item} />
      ))}

      {/* <Counter itemName="Jeans"></Counter>
      <Counter itemName="Jackets"></Counter>
      <Counter itemName="Shirts"></Counter> */}
    </>
  );
};

export default App;
