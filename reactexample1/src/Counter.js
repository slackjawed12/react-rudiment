import { useState } from "react";
const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};
export default Counter;
