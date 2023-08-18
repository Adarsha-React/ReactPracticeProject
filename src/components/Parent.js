import { useCallback, useEffect, useState } from "react";

const Child = ({ getItems }) => {
  useEffect(() => {
    console.log("useEffect");
  }, [getItems]);
  return <div></div>;
};

const Parent = () => {
  const [number, setNumber] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const getItems = useCallback(() => {
    return [number];
  }, [number]);

  return (
    <div>
      <input type="text" onChange={(e) => setNumber(e.target.value)}></input>
      <Child getItems={getItems} />
      <button onClick={() => setCounterTwo(counterTwo + 1)}>
        CounterTwo - {counterTwo}
      </button>
    </div>
  );
};

export default Parent;
