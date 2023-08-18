import { useMemo, useState } from "react";

const Memo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i <= 2000000000) i++;
    if (counterOne % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }, [counterOne]);
  return (
    <div>
      <button onClick={() => setCounterOne(counterOne + 1)}>
        CounterOne - {counterOne}
      </button>
      <h1>{isEven}</h1>
      <button onClick={() => setCounterTwo(counterTwo + 1)}>
        CounterTwo - {counterTwo}
      </button>
    </div>
  );
};

export default Memo;
