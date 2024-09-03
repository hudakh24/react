import Counter from "./components/Counter";
import { useState, useEffect } from "react";

const App = () => {
  const [userInput, setUserInput] = useState(""); //store input into state
  const [items, setItems] = useState(["Jeans", "Shirt"]);
  const [deleteCheck, setDeleteCheck] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const addItem = () => {
    if (!userInput) {
      return;
    }
    setItems([...items, userInput]); // Add new item to the list
    setUserInput(""); // Clear the input field
  };

  const deleteItem = (index) => {
    //let wantToDelete = prompt("Want to delete??");
    //if (wantToDelete === "yes") {
    const updatedItems = [...items.slice(0, index), ...items.slice(index + 1)];
    setItems(updatedItems);
    setDeleteCheck(!deleteCheck);
    // } else {
    //   return;
    // //}
  };

  //alert
  useEffect(() => {
    const newItem = prompt("Please enter the item yo want to add");
    if (!newItem) {
      return; //exit function
    }
    setItems([...items, newItem]);
  }, []);

  return (
    <>
      <input
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter item name"
      />
      <button onClick={addItem}>Add Item</button>
      {items.map((item, index) => (
        <Counter
          key={index} //Always pass unique ID in key  if want manipulation  & if we want to display only then we can use index
          itemName={item}
          onDelete={() => deleteItem(index)} // Pass delete function
        />
      ))}

      {/* <Counter itemName="Jackets"></Counter>
      <Counter itemName="Shirts"></Counter> */}
    </>
  );
};

export default App;
