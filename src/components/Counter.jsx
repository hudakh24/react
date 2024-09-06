import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = ({ itemName, onDelete }) => {
  // let count = 5;
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const Decrement = () => {
    let value = count - 1;
    setCount(value);
  };

  useEffect(() => {
    console.log("userEffect with count", count);
    return () => {
      console.log("cleanUp function", count);
    };
  }, [count]);

  return (
    <>
      <h1>{itemName}</h1>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

Counter.propTypes = {
  itemName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Counter;
