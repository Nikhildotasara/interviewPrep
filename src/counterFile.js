import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/counterSlice";

function CounterFile() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [timer, setTimer] = useState(60);

  //   this is nothign to do with redux
  useEffect(() => {
    const timerFunction = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(timerFunction);
    };
  }, [timer]);

  return (
    <div>
      <p>Time {timer}</p>

      <p>The current counter is {counter}</p>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default CounterFile;
