import { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ itemName }) => {
  // let count = 5;
  const [count, setCount] = useState(0);

  const Increment = () => {
    let value = count + 1;
    setCount(value);
  };
  const Decrement = () => {
    let value = count - 1;
    setCount(value);
  };
  return (
    <>
      <h1>{itemName}</h1>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
};

Counter.propTypes = {
  itemName: PropTypes.string.isRequired,
};

export default Counter;
