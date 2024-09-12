import { useNavigate } from "react-router-dom";
import Counter from "../components/Counter";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { userAuthContext } from "../contexts/userAuthContext";

const Home = () => {
  const [userInput, setUserInput] = useState(""); //store input into state
  const [items, setItems] = useState(["Jeans", "Shirt"]);
  const navigate = useNavigate();
  // const [deleteCheck, setDeleteCheck] = useState(false);
  const x = useContext(userAuthContext);
  console.log("--->", x);
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const addItem = () => {
    //if input field is empty
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
    // setDeleteCheck(!deleteCheck);
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
      <h1>HOME PAGE</h1>
      {/** useNavigate hook lets allow use the navigate function to move to certain route without anchor tags */}
      <button
        onClick={() => {
          navigate("/user-auth/login");
        }}
      >
        Login
      </button>
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

export default Home;
