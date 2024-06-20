import React, { useState, useMemo } from "react";

const FactorialComponent = ({ num }) => {
  // Factorial computation function
  const computeFactorial = (n) => {
    console.log("Computing factorial...");
    if (n < 0) return -1;
    if (n === 0) return 1;
    return n * computeFactorial(n - 1);
  };

  // useMemo hook to memoize the factorial calculation
  const factorial = computeFactorial(num);
  //   const factorial = useMemo(() => computeFactorial(num), [num]);

  return (
    <div>
      <h2>
        Factorial of {num} is: {factorial}
      </h2>
    </div>
  );
};

const UsingMemo = () => {
  const [number, setNumber] = useState(5);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <FactorialComponent num={number} />
    </div>
  );
};

export default UsingMemo;
