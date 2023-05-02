
import React from 'react'
import {useCounterStore} from "../zustand/index";

const Counter = () => {
    const { count, increment, decrement } = useCounterStore();
  return (
    <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
  )
}

export default Counter