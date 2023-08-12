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
      <div className="w-1/3 bg-gray-300 p-2 m-2 mx-auto">
        <h1 className="font-bold">useRef hook usage</h1>
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

        <div className="flex justify-between  my-2 ">
          <h1> useState Counter : {value}</h1>
          <button
            onClick={() => setValue(value + 1)}
            className="bg-orange-600 rounded-md px-2 py-1 text-xs font-bold  hover:bg-gray-400"
          >
            IncStateValue
          </button>
        </div>
        <div className="flex justify-between my-2 mx-auto">
          <h1 className="items-center"> useRef Counter : {countRef.current}</h1>
          <button
            onClick={increment}
            className="bg-orange-600 rounded-md px-2 py-1 text-xs font-bold hover:bg-gray-400"
          >
            IncRefValue
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
      <div className="w-5/6 my-5 m-2">
        <h1 className="font-bold pt-2">Information</h1>
        <h1>
          let variable - let, const, var variable values will not get updated on
          UI even when the values are updated in the component.
        </h1>
        <h1>
          IncStateValue - useState hook is used to create local state variables
          in a functional component and if any of these state variables updated,
          it re-renders the component and its child components. Finally UI will
          be in sync with these variables.
        </h1>{" "}
        <h1>
          IncRefValue - useRef variables are used to store the values and does
          not re-render the page even when the values updated.
        </h1>
        <div>
          <h1 className="font-bold pt-2">Testing Steps</h1>
          <ol className="list-decimal">
            <li className="list-inside">
              Click on the "let variable" button and see the console, counter
              value will be printed when you keep on clicking it but it won't
              update the UI
            </li>
            <li className="list-inside">
              Now click "IncStateValue", then UI will get updated whenever you
              click this button as it triggers the re-render process
            </li>
            <li className="list-inside">
              Now click "let variable", again and see the values in console log,
              it started printing it from 1, this is because when component
              re-renders, these normal variables will be intialized back to
              defualt values.
            </li>
            <li className="list-inside">
              Click two times on "IncRefValue" button but we won't see any
              changes on the page and now click on IncStateValue button, state
              counter will be incremented by one but Ref Counter will get
              updated by two, it means that between renders, the value was saved
              in memory and the value gets displayed during next render.
            </li>
            <li className="list-inside">
              You can check the same way with input box, it works as above
              point.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Body;
