import React, { useState } from "react";


function FunctionCounter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Function Counter</h2>
      <button onClick={handleIncrease}>Increase Count</button>
      <button onClick={handleDecrease}>Decrease Count</button>
      <h3>{count}</h3>
    </div>
  );
}


export default FunctionCounter;
