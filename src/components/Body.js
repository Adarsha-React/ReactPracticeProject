import { useRef, useState } from "react";

const Body = () => {
  const inputRef = useRef(0);

  const countRef = useRef(0);
  let charCount = useRef(0);
  let normalValue = 0;
  const [value, setValue] = useState(0);
  const increment = () => {
    countRef.current = countRef.current + 1;
  };

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    charCount.current = inputValue.length;
  };
  return (
    <>
      <div className="w-1/3 bg-gray-300 mx-auto p-2">
        <h1 className="font-bold">useRef hook usage</h1>
        <div className="flex justify-between my-2 mx-auto">
          <h1 className="items-center"> useRef Counter : {countRef.current}</h1>
          <button
            onClick={increment}
            className="bg-orange-600 rounded-md px-2 py-1 text-xs font-bold hover:bg-gray-400"
          >
            IncRefValue
          </button>
        </div>
        <div className="flex justify-between  my-2 ">
          <h1> useState Counter : {value}</h1>
          <button
            onClick={() => setValue(value + 1)}
            className="bg-orange-600 rounded-md px-2 py-1 text-xs font-bold  hover:bg-gray-400"
          >
            IncStateValue
          </button>
        </div>
        <div className="flex justify-between my-2">
          <h1>let variable counter : {normalValue}</h1>
          <button
            onClick={() => {
              normalValue = normalValue + 1;
              console.log(normalValue);
            }}
            className="bg-orange-600 rounded-md px-2 py-1 text-xs font-bold  hover:bg-gray-400"
          >
            let variable
          </button>
        </div>

        <div className="flex justify-between my-2">
          <h1>character count : {charCount.current}</h1>
          <input
            type="text"
            ref={inputRef}
            onChange={handleInputChange}
            className="outline-none px-2"
          ></input>
        </div>
      </div>
    </>
  );
};

export default Body;
