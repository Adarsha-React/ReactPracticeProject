import { useEffect, useState } from "react";
import { useDebounce } from "./utils/useDebounce";

const Debounce = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(debounceValue);
  }, [debounceValue]);

  return (
    <div>
      <h1 className="font-bold">Debouncing</h1>
      <input
        type="text"
        className="border border-gray-400"
        value={value}
        onChange={handleInput}
      />
    </div>
  );
};

export default Debounce;
