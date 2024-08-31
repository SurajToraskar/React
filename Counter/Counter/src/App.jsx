import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  function incrementFunc() {
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrementFunc() {
    if (counter <= 0) {
      window.alert(`cannot go below 0`);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementFunc}>Increment Button</button>
      <button onClick={decrementFunc}>Decrement Button</button>
    </div>
  );
}
