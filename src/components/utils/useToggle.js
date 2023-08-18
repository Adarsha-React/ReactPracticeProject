import { useState } from "react";

const useToggle = (initialValue) => {
  const [flag, setFlag] = useState(initialValue);
  const toggle = () => {
    setFlag(!flag);
  };

  return { flag, toggle };
};

export default useToggle;
