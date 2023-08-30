import { useState } from "react";

const TestUseEffect = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1); // 0 + 1
    setCounter(counter + 2); // 0 + 2
    setCounter(counter + 5); // 0 + 5
    // above set functions give 5 at the end

    setCounter((prev) => prev + 1); // 5 + 1
    setCounter((prev) => prev + 2); // 6 + 2
    setCounter((prev) => prev + 5); // 8 + 5
  };

  return (
    <div className="flex justify-center m-2">
      <div>
        <button
          onClick={handleClick}
          className="bg-blue-500 p-2 rounded-md text-white "
        >
          Counter - {counter}
        </button>
      </div>
    </div>
  );
};

export default TestUseEffect;
